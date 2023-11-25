const cskPlayers = [
  {
    Name: "Ms Dhoni",
    isCaptain: true,
    isBatsman: true,
    isBowler: false,
    isWicketKeeper: true,
    isAlrounder: false,
    cost: 12,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png",
    teamName: "CHENNAI SUPER KINGS",
  },

  {
    Name: "Devon Conway",
    isCaptain: false,
    isBatsman: true,
    isBowler: false,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 1,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/601.png",
    teamName: "CHENNAI SUPER KINGS",
  },

  {
    Name: "Ruturaj Gaikwad",
    isCaptain: false,
    isBatsman: true,
    isBowler: false,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 6,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/102.png",
    teamName: "CHENNAI SUPER KINGS",
  },

  {
    Name: "Ambati Rayudu",
    isCaptain: false,
    isBatsman: true,
    isBowler: false,
    isWicketKeeper: true,
    isAlrounder: false,
    cost: 6.75,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/60.png",
    teamName: "CHENNAI SUPER KINGS",
  },
  {
    Name: "Subhranshu Senapati",
    isCaptain: false,
    isBatsman: true,
    isBowler: false,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 0.2,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/971.png",
    teamName: "CHENNAI SUPER KINGS",
  },
  {
    Name: "Moeen Ali",
    isCaptain: false,
    isBatsman: true,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: true,
    cost: 8,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/206.png",
    teamName: "CHENNAI SUPER KINGS",
  },
  {
    Name: "Shivam Dube",
    isCaptain: false,
    isBatsman: true,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: true,
    cost: 4,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/211.png",
    teamName: "CHENNAI SUPER KINGS",
  },
  {
    Name: "Rajvardhan Hangargekar",
    isCaptain: false,
    isBatsman: false,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 1.5,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/783.png",
    teamName: "CHENNAI SUPER KINGS",
  },
  {
    Name: "Dwaine Pretorius",
    isCaptain: false,
    isBatsman: true,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: true,
    cost: 0.5,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/289.png",
    teamName: "CHENNAI SUPER KINGS",
  },
  {
    Name: "Mitchell Santner",
    isCaptain: false,
    isBatsman: false,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 1.9,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/75.png",
    teamName: "CHENNAI SUPER KINGS",
  },
  {
    Name: "Ravindra Jadeja",
    isCaptain: false,
    isBatsman: true,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: true,
    cost: 16,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png",
    teamName: "CHENNAI SUPER KINGS",
  },
  {
    Name: "Tushar Deshpande",
    isCaptain: false,
    isBatsman: false,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 0.2,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/539.png",
    teamName: "CHENNAI SUPER KINGS",
  },
  {
    Name: "Simarjeet Singh",
    isCaptain: false,
    isBatsman: false,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 10.75,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/622.png",
    teamName: "CHENNAI SUPER KINGS",
  },
  {
    Name: "Matheesha Pathirana",
    isCaptain: false,
    isBatsman: false,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 0.2,
    image: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1014.png",
    teamName: "CHENNAI SUPER KINGS",
  },
];

export const cskInfo = {
  name: "CHENNAI SUPER KINGS",
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/640px-Chennai_Super_Kings_Logo.svg.png",
  video: "https://www.youtube.com/watch?v=6ST7YbX9xwc",
  captain: cskPlayers.filter((p) => p.isCaptain === true),
};

export default cskPlayers;
