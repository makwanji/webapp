module.exports = (sequelize, DataTypes) => {
  const Ransomware = sequelize.define('Ransomware', {
    name: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    extensions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    extensionPattern: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ransomNoteFilenames: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    encryptionAlgorithm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    decryptor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resources: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    screenshots: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    microsoftDetectionName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    microsoftInfo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sandbox: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    iocs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    snort: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return Ransomware;
};
