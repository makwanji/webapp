module.exports = (sequelize, DataTypes) => {
  const Ransomware = sequelize.define('Ransomware', {
    name: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    extensions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    extensionPattern: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ransomNoteFilenames: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    encryptionAlgorithm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    decryptor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resources: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    screenshots: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    microsoftDetectionName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    microsoftInfo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sandbox: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    iocs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    snort: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  return Ransomware;
};
