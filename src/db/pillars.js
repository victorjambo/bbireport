import _ from '../utils/constants';

const pillars = [
  {
    id: _.ONE,
    title: 'Lack of a National Ethos',
    desc:
      'Kenya is today increasingly being defined internationally by its negative politics and the challenges that they create. Corruption and violence are the main characteristics by which Kenyans are defined by the international community. Despite the many positive attributes of our country, we are yet to define and promote its national ethos. Nationhood and patriotism requires that people feel they enjoy a commonality beyond the sharing of residency in a country, and that they feel they have common characteristics, beliefs and aspirations.',
  },
  {
    id: _.TWO,
    title: 'Ethnic Antagonism Competition',
    desc:
      "Kenya is witnessing a continued deterioration of relationships between ethnic communities and political formations. These relationships are too often characterized by aggressive antagonism and competition. A strong nation cannot develop in this way. H.E. President Uhuru Kenyatta and H.E. Raila Odinga are standing together to urge every Kenyan, every political leader and formation to compete without using ethnic profiling or by promoting disdain for any group. \n\n The two leaders respect one another. They have been competitors and even used hard language at times, but they have always been friends and respected one another. They respect each other as individuals and as leaders,. They respect each other's communities. They respect Kenyans, and they respect our nation. Every single Kenyan knows and needs respect. Respect should not mean that we tolerate what is wrong. However, the two leaders want to say to all Kenyans: the sins of individuals should not be visited on groups. We must reject and censure anyone who conducts themselves in a negative and hateful way.",
  },
  {
    id: _.THREE,
    title: 'Responsibilities Rights',
    desc:
      'Kenyans must have their human and civil rights respected and enforced. There is no Kenyan whose rights should be compromised no matter the interests against them. Kenyans have struggled hard for these rights and they are not for anybody to take for granted. At the same time, to attain and protect our rights, we must embrace our responsibilities. The two can never be separated if we are to have either. H.E. President Uhuru Kenyatta and H.E. Raila Odinga standing here before the country today reflect their responsibility as leaders, as parents, and as friends. They urge every leader, and every Kenyan, to embrace the responsibilities you know are yours.',
  },
  {
    id: _.FOUR,
    title: 'Shared Prosperity',
    desc:
      'In parts of the country, there are many who are doing well, and Kenya continues to be a leading destination for investment into the region. Yet too many Kenyans lack decent income, and our investment lags behind those parts of the world that have developed broadly shared prosperity in the last few decades. We have to do much better. There are blockages, and perverse incentives against innovation, growth and job creation in our economic system. The two leaders will work together to clear them from every part of the country so that prosperity comes to us all. Every level of government should be pressed to properly integrate and regulate value and supply chains if every Kenyan, in every part of the country, is going to be lifted out of poverty. H.E. President Uhuru Kenyatta and H.E. Raila Odinga will stand together to ensure that the shared prosperity agenda is never forgotten and that it is mainstreamed as a priority objective in our development.',
  },
  {
    id: _.FIVE,
    title: 'Divisive Elections',
    desc:
      'Elections in Kenya have now become a threat to lives, our economy and our standing as a nation. Every four years, the country almost comes to standstill as elections are prepared for. Investment and economic activity slow, losing Kenyans precious jobs and livelihoods, while political competition often escalates beyond vibrant debate into ethnic polarisation. Personal security becomes uncertain, and often there is violence. Kenyans need to overcome this negative cycle by acting on the understanding that elections on their own are not the solution to our national challenges. By faithfully adhering to the Constitution and the law, halting ethnic antagonism and profiling, by promoting inclusivity, by strengthening devolution, by fighting corruption, and caring about safety and security, we will have elections that are not marred by mistrust and conflict. We have been in institutional reform mode for many years now, and for sure that there will be more to come in the future. But today, it is time to acknowledge the other critical items we have not put enough work into. We must seek to shift our terms of engagement as leaders, as individuals and as citizens, if we are to have competitive and constructive elections. That should be our first priority.',
  },
  {
    id: _.SIX,
    title: 'Safety Security',
    desc:
      'Too many Kenyans lives are afflicted by natural and man-made disasters. Today, there is a long drought that has settled over the country, risking the lives of many Kenyans and their livelihoods. H.E. President Uhuru Kenyatta and H.E. Raila Odinga will come together to aid Kenyans at this time of great need. They are asking all leaders, no matter at what level, in every part of the country, to stand up and demonstrate their leadership by making a practical effort to ensure that those who are hungry or in distress are aided. The two leaders will work together to to ensure that all warring communities in Kenya reject violence as a way of settling inter-communal conflict or advancing any political, ethnic or religious cause. They urge every leader to join us in this critical work. For those who launch terrorist attacks on our people, H.E. President Uhuru Kenyatta and H.E. Raila Odinga will work with Kenyans to unite them to stand against terrorists as a united people.',
  },
  {
    id: _.SEVEN,
    title: 'Devolution',
    desc:
      'Devolution has so far been the most successful story in the recent process of building a strong nation. Yet a lot remains to be done in enhancing its political viability and economic sustainability. Politically, devolution has led to exclusivity in counties where some local communities have found themselves isolated and excluded by the more populous ones creating marginalisation. Economically, the viability of counties is a matter of concern. It is imperative that the recent efforts by counties to coordinate their development plans in clusters defined by geography and economic sectors should be strongly encouraged both politically and practically. H.E. President Uhuru Kenyatta and H.E. Raila Odinga will work together to bring counties together regardless of the political affiliation of their Governors, Senators and MCAs. They will make sure that counties are delivering to the people. They will work together to hold all county governments accountable to the people. H.E. President Uhuru Kenyatta and H.E. Raila Odinga will continually promote a common approach that helps citizens understand the role of devolution in creating the Kenyan nation and its significance to their development.',
  },
  {
    id: _.EIGHT,
    title: 'Corruption',
    desc:
      'Corruption is an existential threat to our Kenya. It is destroying lives, public trust and prosperity. It is being passed to the young generation, making a mockery of their hopes and their need to forge an honest and proud living. It is undermining our public and private institutions, and will destroy them and our aspirations as a nation. The fight against corruption has to be carried out from a wide and common front to eliminate any sanctuary for perpetrators. H.E. President Uhuru Kenyatta and H.E. Raila Odinga will strongly support efforts to support whistleblowing from all Kenyans, and they urge all of you to loudly report the corruption you witness no matter where it is. Our fighting and reporting corruption should itself not be corrupt, it must not be a witch hunt but instead should reflect integrity. H.E. President Uhuru Kenyatta and H.E. Raila Odinga will stand together to ensure that political affiliation shall not be used to shield those who are found to be corrupt.',
  },
  {
    id: _.NINE,
    title: 'Inclusivity',
    desc:
      'Inclusivity is one of the greatest challenges Kenyans face. We as Kenyans have failed to appreciate our God-given differences in how we think, the languages we speak, the regions we come from, and the way we worship. We have failed to appreciate that we are as the fingers of the hand: weak alone, and as strong as a fist when folded together. Our political system has been unable to respond to feelings of alienation in sections of our people. Many feel alienated from the mainstream national development initiatives and political activity. Such real and imagined exclusion is anathema to effective nation-building. H.E. President Uhuru Kenyatta and H.E. Raila Odinga commit themselves to make the strongest efforts to find the right skills and attitudes from as many backgrounds and identities as possible. They both commit to fight hard for inclusivity and to make sure, in an accountable and impactful way, that public institutions work to deliver to all Kenyans at the national and county level. And, crucially, they will work together to guarantee that all Kenyans are served equally by public institutions, no matter who leads them.',
  },
];

export default pillars;
