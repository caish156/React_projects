const kkrPlayers = [
  {
    id: "184880cc",
    Name: "Shreyas Iyer",
    isCaptain: false,
    isBatsman: true,
    isBowler: false,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 12.25,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/12.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
  {
    Name: "Nitish Rana",
    isCaptain: true,
    isBatsman: true,
    isBowler: false,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 8,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/148.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },

  {
    Name: "Venkatesh Iyer",
    isCaptain: false,
    isBatsman: true,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: true,
    cost: 8,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/584.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
  {
    Name: "Andre Russell",
    isCaptain: false,
    isBatsman: true,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: true,
    cost: 8,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/141.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
  {
    Name: "Sunil Narine",
    isCaptain: false,
    isBatsman: true,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: true,
    cost: 6,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/156.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
  {
    Name: "Umesh Yadav",
    isCaptain: false,
    isBatsman: false,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 2,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/21.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
  {
    Name: "Tim Southee",
    isCaptain: false,
    isBatsman: false,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 1.5,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/77.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
  {
    Name: "Harshit Rana",
    isCaptain: false,
    isBatsman: false,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 0.2,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1013.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
  {
    Name: "Varun Chakravarthy",
    isCaptain: false,
    isBatsman: false,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 8,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/140.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
  {
    Name: "Anukul Roy",
    isCaptain: false,
    isBatsman: false,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 0.2,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/160.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
  {
    Name: "Rinku Singh",
    isCaptain: false,
    isBatsman: true,
    isBowler: false,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 0.55,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/152.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
  {
    Name: "Rahmanullah Gurbaz",
    isCaptain: false,
    isBatsman: true,
    isBowler: false,
    isWicketKeeper: true,
    isAlrounder: false,
    cost: 0.5,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/641.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
  {
    Name: "Shardul Thakur",
    isCaptain: false,
    isBatsman: false,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 10.75,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/105.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
  {
    Name: "Lockie Ferguson",
    isCaptain: false,
    isBatsman: false,
    isBowler: true,
    isWicketKeeper: false,
    isAlrounder: false,
    cost: 10,
    image:
      "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/69.png",
    teamName: "KOLKATA KNIGHT RIDERS",
  },
];

export const kkrInfo = {
  name: "KOLKATA KNIGHT RIDERS",
  image:
    "https://img.jagranjosh.com/images/2023/March/3032023/ipl-2023-KKR-players-list.jpg",
  video: "https://www.youtube.com/watch?v=6ST7YbX9xwc",
  captain: kkrPlayers.filter((p) => (p.isCaptain ? p : "")),
};

export default kkrPlayers;
