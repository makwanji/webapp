const { Ransomware } = require('../models');

const load = async (req, res) => {
  async function fetchAndStoreData() {
    try {
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

};


const getRansomware = async (req, res) => {
  try {
    const ransomwares = await Ransomware.findAll();
    res.status(200).json(ransomwares);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {
  load,
  getRansomware
};
