const axios = require('axios');
// const { Sequelize, DataTypes } = require('sequelize');
const { Ransomware } = require('../models');

const loadRansomware = async (req, res) => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/codingo/Ransomware-Json-Dataset/master/ransomware_overview.json');
    const ransomwareData = response.data;

    console.log(ransomwareData);

    for (let record of ransomwareData) {
      try {
        await Ransomware.upsert({
          name: record.name,
          extensions: record.extensions,
          extensionPattern: record.extensionPattern,
          ransomNoteFilenames: record.ransomNoteFilenames,
          comment: record.comment,
          encryptionAlgorithm: record.encryptionAlgorithm,
          decryptor: record.decryptor,
          resources: record.resources,
          screenshots: record.screenshots,
          microsoftDetectionName: record.microsoftDetectionName,
          microsoftInfo: record.microsoftInfo,
          sandbox: record.sandbox,
          snort: record.snort,
          sandbox: record.sandbox,
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

    res.status(200).json(ransomwareData);

  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
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
  loadRansomware,
  getRansomware
};


