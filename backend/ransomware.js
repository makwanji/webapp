const axios = require('axios');
const { Sequelize, DataTypes } = require('sequelize');

// Step 3: Set up Sequelize to connect to PostgreSQL
const sequelize = new Sequelize('ransomwareDB', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Disable logging to make the output cleaner
});

// Step 4: Define the Sequelize model
const Ransomware = sequelize.define('Ransomware', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure no duplicate entries based on name
  },
  aliases: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Store array of strings
  },
  targetSystem: {
    type: DataTypes.STRING,
  },
  firstAppearance: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt timestamps
});

// Step 5: Fetch and store data
async function fetchAndStoreData() {
  try {
    // Sync the model to create the table if it doesn't exist
    await sequelize.sync();

    // Fetch data from GitHub
    const response = await axios.get('https://raw.githubusercontent.com/codingo/Ransomware-Json-Dataset/master/ransomware_overview.json');
    const ransomwareData = response.data;

    // Iterate and insert/update records
    for (let record of ransomwareData) {
      try {
        // Use upsert to insert or update based on 'name' field
        await Ransomware.upsert({
          name: record.name,
          aliases: record.aliases || [],
          targetSystem: record.target_system || null,
          firstAppearance: record.first_appearance || null,
          type: record.type || null,
          description: record.description || null,
        });

        console.log(`Record for ${record.name} processed successfully.`);
      } catch (error) {
        console.error(`Error saving record for ${record.name}: ${error.message}`);
      }
    }

    console.log('Data import completed.');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  } finally {
    // Close the database connection after the process is complete
    await sequelize.close();
  }
}

// Run the function to fetch and store data
fetchAndStoreData();
