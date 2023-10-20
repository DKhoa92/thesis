export const enum AvatarGenderType {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

/**
 * Tạo url avatar bằng dicebear API
 * Link tham khảo: https://www.dicebear.com/styles/avataaars/
 * Link playground: https://www.dicebear.com/playground/?style=avataaars
 * */
export const genAvatarUrl = (seed: string, gender: AvatarGenderType): string => {
  let avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
    seed,
  )}&backgroundColor=b6e3f4&accessories=round,prescription01,prescription02,wayfarers,kurt,sunglasses&accessoriesProbability=20&clothing=shirtCrewNeck,shirtScoopNeck,shirtVNeck,graphicShirt,collarAndSweater,blazerAndSweater,blazerAndShirt,hoodie&eyebrows=defaultNatural,flatNatural,frownNatural,raisedExcited,default,raisedExcitedNatural&eyes=surprised,default,squint&facialHair[]&facialHairColor[]&facialHairProbability=0&hairColor=2c1b18,724133,a55728,4a312c,b58143,c93305,ecdcbf,f59797&hatColor=25557c,5199e4,a7ffc4,b1e2ff,e6e6e6,ff488e,ff5c5c,262e33,3c4f5c,65c9ff,929598,ffafb9,ffdeb5,ffffb1,ffffff&mouth=smile&skinColor=edb98a,ffdbb4,d08b5b,fd9841`;
  avatarUrl +=
    gender === AvatarGenderType.MALE
      ? '&top=frizzle,dreads01,dreads02,hat,shaggy,shaggyMullet,shortCurly,shortFlat,shortRound,shortWaved,theCaesar,theCaesarAndSidePart,winterHat03'
      : '&top=bigHair,bob,bun,curly,curvy,dreads,frida,fro,froBand,longButNotTooLong,miaWallace,shavedSides,straight01,straight02,straightAndStrand';
  return avatarUrl;
};
