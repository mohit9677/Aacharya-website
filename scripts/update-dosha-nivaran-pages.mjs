import fs from 'node:fs'
import path from 'node:path'

const ROOT = 'D:/AstroBharatAI/AstroBharatAI aacharya website'
const PAGES_DIR = path.join(ROOT, 'client/src/pages/pujas')

const PUJAS = [
  {
    file: 'PitraDoshPujaPage.jsx',
    component: 'PitraDoshPujaPage',
    id: 'pitra-dosh-puja',
    name: 'Pitra Dosh Puja',
    heroTitleMain: 'Pitra Dosh',
    heroTitleAccent: 'Puja',
    quote: 'Heal the ancestral line, and destiny begins to flow.',
    subtitle: 'A sacred Vedic ritual to honor and pacify ancestral souls whose unresolved karma may still affect the family lineage.',
    colorClass: 'pitra',
    icon: '🌕',
    shortDesc: {
      en: 'A sacred Vedic ritual to honor and pacify ancestral souls whose unfulfilled desires or improper last rites continue to create obstacles in the lives of their descendants.',
      hi: 'एक पवित्र वैदिक अनुष्ठान जो उन पूर्वज आत्माओं को सम्मान और शांति देने के लिए किया जाता है जिनकी अधूरी इच्छाएं या अनुचित अंतिम संस्कार उनके वंशजों के जीवन में बाधाएं उत्पन्न करती हैं।',
    },
    whatIs: {
      en: `Pitra Dosh Puja is one of the most powerful ancestral healing rituals in Vedic astrology and spirituality. The word "Pitra" means ancestors or forefathers, and "Dosh" means a flaw or cosmic affliction. When a horoscope carries Pitra Dosh — typically indicated by the Sun, Saturn, or Rahu in the 9th house — it signals that the souls of one's ancestors have not attained peace. Perhaps their last rites were not properly performed, their final wishes remained unfulfilled, or they departed this world in suffering or trauma.

This unresolved ancestral karma creates a ripple effect across generations — manifesting as persistent financial struggles, health crises, failed relationships, repeated miscarriages, delayed marriages, or inexplicable misfortune that shadows the family like a dark cloud. The effects of Pitra Dosh are not a punishment but a cosmic whisper — a call from the soul realm asking for acknowledgment, remembrance, and liberation.

Performed especially during Pitru Paksha, Amavasya, or Mahalaya, this puja involves prayers, tarpan (water offerings), pind daan, and Brahmin bhojan — rituals that build a luminous bridge between the world of the living and the realm of departed souls, bringing divine peace to both.`,
      hi: `पित्र दोष पूजा वैदिक ज्योतिष और अध्यात्म की सबसे शक्तिशाली पूर्वज उपचार विधियों में से एक है। "पित्र" का अर्थ है पूर्वज और "दोष" का अर्थ है ब्रह्मांडीय पीड़ा। जब कुंडली में पित्र दोष होता है — जो सूर्य, शनि या राहु की नवम भाव में स्थिति से संकेतित होता है — यह दर्शाता है कि पूर्वजों की आत्माओं को शांति नहीं मिली। शायद उनका अंतिम संस्कार ठीक से नहीं हुआ, अंतिम इच्छाएं अधूरी रह गईं, या वे पीड़ा में इस लोक से विदा हुए।

यह अनसुलझा पूर्वज कर्म पीढ़ियों तक प्रभाव डालता है — स्थायी आर्थिक संघर्ष, स्वास्थ्य संकट, असफल रिश्ते, बार-बार गर्भपात, विवाह में देरी के रूप में प्रकट होता है। पित्र दोष के प्रभाव कोई दंड नहीं, बल्कि एक ब्रह्मांडीय पुकार हैं — आत्मा लोक से स्वीकृति, स्मरण और मुक्ति की मांग।

पितृ पक्ष, अमावस्या या महालय पर विशेष रूप से की जाने वाली इस पूजा में तर्पण, पिंड दान और ब्राह्मण भोजन शामिल हैं — ऐसे अनुष्ठान जो जीवित लोगों और दिवंगत आत्माओं के बीच एक दिव्य सेतु बनाते हैं और दोनों को शांति प्रदान करते हैं।`,
    },
    why: [
      {
        en: 'To free the family lineage from the curse of unsettled ancestral souls who departed without proper last rites, causing repeated patterns of misfortune and suffering across multiple generations.',
        hi: 'उन अशांत पूर्वज आत्माओं के श्राप से परिवार की वंशावली को मुक्त करने के लिए जो उचित अंतिम संस्कार के बिना गए और जिनके कारण पीढ़ियों में दुर्भाग्य के पैटर्न बनते हैं।',
      },
      {
        en: 'To address unexplained misfortunes, chronic illnesses, and financial blockages that persist despite sincere efforts, which may deeply stem from unresolved ancestral karma affecting descendants.',
        hi: 'अकारण दुर्भाग्य, दीर्घकालिक बीमारी और वित्तीय रुकावटों को दूर करने के लिए जो ईमानदार प्रयासों के बावजूद बनी रहती हैं और अनसुलझे पूर्वज कर्म से उत्पन्न होती हैं।',
      },
      {
        en: 'To seek blessings and divine protection from forefathers, ensuring their positive energy flows into the family, bringing prosperity, health, and harmony into the lives of all living members.',
        hi: 'पूर्वजों से आशीर्वाद और दिव्य सुरक्षा प्राप्त करने के लिए, यह सुनिश्चित करने के लिए कि उनकी सकारात्मक ऊर्जा परिवार में प्रवाहित हो और सभी जीवित सदस्यों के जीवन में समृद्धि लाए।',
      },
      {
        en: 'When children fall ill repeatedly, marriages face constant delay, or pregnancies fail — this puja is performed to neutralize the hidden ancestral influences quietly working against the family.',
        hi: 'जब परिवार के बच्चे बार-बार बीमार पड़ते हैं, विवाह में देरी होती है या गर्भावस्था असफल होती है — तो परिवार के विरुद्ध काम कर रहे छिपे पूर्वज प्रभावों को निष्क्रिय करने के लिए यह पूजा की जाती है।',
      },
      {
        en: 'To perform the sacred duty of tarpan and pind daan for ancestors who missed proper rituals, helping their wandering souls attain liberation and ascend toward the higher realms of existence.',
        hi: 'उन पूर्वजों के लिए तर्पण और पिंड दान का पवित्र कर्तव्य निभाने के लिए जिन्हें उचित अनुष्ठान नहीं मिले, ताकि उनकी भटकती आत्माएं मुक्ति प्राप्त करें और उच्च लोकों की ओर बढ़ें।',
      },
      {
        en: 'On sacred occasions like Pitru Paksha, this puja maintains a living bond with ancestors, expressing gratitude for the life, wisdom, and cosmic legacy they so lovingly passed down to us.',
        hi: 'पितृ पक्ष जैसे पवित्र अवसरों पर, यह पूजा पूर्वजों के साथ जीवंत बंधन बनाए रखती है और उनके द्वारा दिए गए जीवन, ज्ञान और ब्रह्मांडीय विरासत के लिए कृतज्ञता व्यक्त करती है।',
      },
    ],
    benefits: [
      { en: 'Removes generational curses and persistent misfortunes that have been haunting the family for multiple generations without any apparent cause.', hi: 'पीढ़ीगत श्रापों और स्थायी दुर्भाग्य को दूर करता है जो बिना किसी स्पष्ट कारण के कई पीढ़ियों से परिवार को परेशान कर रहे हैं।' },
      { en: "Brings peace to departed souls, creating a harmonious flow of positive ancestral energy and divine blessings into the family's present life.", hi: 'दिवंगत आत्माओं को शांति देता है और परिवार के वर्तमान जीवन में सकारात्मक पूर्वज ऊर्जा और दिव्य आशीर्वाद का सामंजस्यपूर्ण प्रवाह बनाता है।' },
      { en: 'Resolves long-standing obstacles in marriage, career, and financial growth that conventional methods fail to permanently solve for the family.', hi: 'विवाह, कैरियर और वित्तीय विकास में दीर्घकालिक बाधाओं को हल करता है जिन्हें पारंपरिक तरीके स्थायी रूप से हल करने में विफल रहते हैं।' },
      { en: 'Improves health and vitality of family members, especially children, who may unknowingly be suffering under heavy ancestral karmic debts.', hi: 'परिवार के सदस्यों, विशेषकर बच्चों के स्वास्थ्य और जीवन शक्ति में सुधार करता है जो अनजाने में पूर्वज कर्म ऋण के कारण पीड़ित हो सकते हैं।' },
      { en: 'Restores mental peace and emotional stability to family members plagued by anxiety, depression, or unexplainable restlessness without any clear reason.', hi: 'बिना किसी स्पष्ट कारण के चिंता, अवसाद या अकारण बेचैनी से पीड़ित परिवार के सदस्यों को मानसिक शांति और भावनात्मक स्थिरता देता है।' },
      { en: 'Opens the path toward spiritual growth and liberation for both the living descendants and the souls of beloved departed ancestors simultaneously.', hi: 'जीवित वंशजों और दिवंगत प्रिय पूर्वजों की आत्माओं दोनों के लिए एक साथ आध्यात्मिक विकास और मुक्ति का मार्ग खोलता है।' },
    ],
    steps: [
      { title: 'Sankalp (Sacred Vow)', desc: 'The devotee takes a formal vow before the deity, declaring intent and naming the lineage of ancestors being honored.' },
      { title: 'Kalash Sthapana', desc: 'A sacred copper or clay pot filled with holy water, mango leaves, and coconut is installed as a divine cosmic witness.' },
      { title: 'Ganesh Puja', desc: 'Lord Ganesha is invoked first to remove all obstacles and bless the ritual with success, auspiciousness, and divine acceptance.' },
      { title: 'Navgraha Puja', desc: 'All nine planets are worshipped to calm negative planetary energies that may be intensifying the Pitra Dosh in the horoscope.' },
      { title: 'Pitra Puja & Tarpan', desc: 'Sacred water with sesame seeds and flowers is offered to ancestors with Vedic mantras, calling their souls with love and reverence.' },
      { title: 'Pind Daan', desc: 'Rice balls called pindas are offered as symbolic nourishment to the ancestors, helping their souls attain eternal peace and liberation.' },
      { title: 'Homam (Sacred Fire)', desc: 'Ghee, sesame seeds, and medicinal herbs are offered into the sacred fire with powerful Vedic chants to purify ancestral karma.' },
      { title: 'Brahmin Bhojan', desc: 'Learned Brahmin priests are honored with a sacred meal and dakshina on behalf of the ancestors as an act of divine service.' },
      { title: 'Visarjan (Immersion)', desc: 'The ritual concludes with offerings immersed in a holy river, symbolizing the final liberation and ascension of ancestral souls.' },
    ],
  },
  {
    file: 'MangalDoshPujaPage.jsx',
    component: 'MangalDoshPujaPage',
    id: 'mangal-dosh-puja',
    name: 'Mangal Dosh Puja',
    heroTitleMain: 'Mangal Dosh',
    heroTitleAccent: 'Puja',
    quote: "Transform Mars' fire from conflict into divine strength.",
    subtitle: 'A powerful Vedic ritual to neutralize the aggressive influence of Mars in marriage, health, and relationships.',
    colorClass: 'mangal',
    icon: '🔴',
    shortDesc: {
      en: 'A powerful Vedic ritual performed to neutralize the fiery and aggressive influence of Mars (Mangal) in the horoscope, which creates turmoil in marriage, health, and relationships.',
      hi: 'एक शक्तिशाली वैदिक अनुष्ठान जो कुंडली में मंगल (Mars) के उग्र और आक्रामक प्रभाव को निष्क्रिय करने के लिए किया जाता है, जो विवाह, स्वास्थ्य और रिश्तों में उथल-पुथल पैदा करता है।',
    },
    whatIs: {
      en: `Mangal Dosh Puja is a profound Vedic ritual dedicated to appeasing the fiery and warrior planet Mars — known as Mangal in Vedic astrology. When Mars is placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house of a person's horoscope, it creates what is known as Mangal Dosh, Kuja Dosh, or Manglik Dosh — one of the most feared and widely discussed astrological afflictions in Indian tradition.

Mars, the planet of fire, aggression, energy, and war, when ill-placed becomes a volatile force that disrupts marital harmony, increases temperament and impulsiveness, causes accidents, and creates perpetual friction in personal relationships. A Manglik person is said to carry a powerful martial energy that, if unbalanced, can harm their partner's health or longevity.

This puja is a cosmic reset — a sacred act of channeling Mars' raw, wild energy into a constructive divine force. Through mantras, homa, and prayers at sacred Mangal temples like Ujjain's Mangalnath, the energy of Mars is transformed from destructive fire into the fire of courage, leadership, and victory. Once performed, devotees report dramatic improvements in their relationships, temperament, and overall fortune — as if a fire that once burned them now lights their way.`,
      hi: `मंगल दोष पूजा एक गहन वैदिक अनुष्ठान है जो अग्नि और योद्धा ग्रह मंगल को शांत करने के लिए समर्पित है। जब मंगल किसी की कुंडली के 1, 2, 4, 7, 8 या 12वें भाव में स्थित होता है, तो यह मंगल दोष, कुज दोष या मांगलिक दोष बनाता है — भारतीय परंपरा में सबसे भयभीत और व्यापक रूप से चर्चित ज्योतिषीय पीड़ाओं में से एक।

मंगल — अग्नि, आक्रामकता, ऊर्जा और युद्ध का ग्रह — जब अशुभ स्थिति में होता है तो वैवाहिक सौहार्द को बाधित करता है, स्वभाव में उग्रता और आवेग बढ़ाता है, दुर्घटनाएं कराता है और व्यक्तिगत रिश्तों में निरंतर तनाव पैदा करता है। मांगलिक व्यक्ति एक शक्तिशाली मार्शल ऊर्जा वहन करता है जो असंतुलित होने पर अपने साथी के स्वास्थ्य या दीर्घायु को प्रभावित कर सकती है।

यह पूजा एक ब्रह्मांडीय रीसेट है — मंगल की कच्ची, जंगली ऊर्जा को एक रचनात्मक दिव्य शक्ति में बदलने का पवित्र कार्य। मंत्रों, होम और उज्जैन के मंगलनाथ जैसे पवित्र मंगल मंदिरों में प्रार्थनाओं के माध्यम से, मंगल की ऊर्जा विनाशकारी अग्नि से साहस, नेतृत्व और विजय की अग्नि में परिवर्तित हो जाती है।`,
    },
    why: [
      { en: 'Mangal Dosh creates intense friction in marriages — couples fight constantly, relationships break repeatedly, and compatibility seems impossible. This puja brings divine peace to the marital bond.', hi: 'मंगल दोष विवाहों में तीव्र घर्षण पैदा करता है — दंपत्ति लगातार लड़ते हैं, रिश्ते बार-बार टूटते हैं। यह पूजा वैवाहिक बंधन में दिव्य शांति लाती है।' },
      { en: "People with Mangal Dosh face frequent accidents, surgeries, and sudden health crises. The puja is performed to reduce Mars' aggressive physical manifestation and protect the body from harm.", hi: 'मंगल दोष वाले लोगों को बार-बार दुर्घटनाएं, सर्जरी और अचानक स्वास्थ्य संकट का सामना करना पड़ता है। यह पूजा शरीर को नुकसान से बचाने के लिए की जाती है।' },
      { en: 'A Manglik individual is traditionally not advised to marry a non-Manglik without this puja, as the imbalance in Mars energy is believed to affect the health and longevity of the partner.', hi: 'परंपरागत रूप से मांगलिक व्यक्ति को इस पूजा के बिना गैर-मांगलिक से विवाह की सलाह नहीं दी जाती, क्योंकि मंगल ऊर्जा का असंतुलन साथी के स्वास्थ्य को प्रभावित कर सकता है।' },
      { en: 'Individuals with Mangal Dosh often have uncontrollable anger, rash decision-making, and impulsive behavior. The puja calms this fiery energy and improves emotional intelligence and patience.', hi: 'मंगल दोष वाले व्यक्तियों में अक्सर अनियंत्रित क्रोध और आवेगपूर्ण व्यवहार होता है। यह पूजा इस उग्र ऊर्जा को शांत करती है और भावनात्मक बुद्धिमत्ता में सुधार करती है।' },
      { en: "Property disputes, legal troubles, and real estate losses are common Mangal Dosh effects. This puja is done to protect one's land, property, and professional reputation from Mars' destructive influence.", hi: 'संपत्ति विवाद, कानूनी परेशानी और अचल संपत्ति में नुकसान सामान्य मंगल दोष प्रभाव हैं। यह पूजा भूमि और पेशेवर प्रतिष्ठा को मंगल के विनाशकारी प्रभाव से बचाने के लिए की जाती है।' },
      { en: "To transform Mars' raw aggressive energy into the divine fire of courage, ambition, and leadership — so that the Manglik person can use this powerful planetary force as a strength, not a curse.", hi: 'मंगल की कच्ची आक्रामक ऊर्जा को साहस, महत्वाकांक्षा और नेतृत्व की दिव्य अग्नि में बदलने के लिए — ताकि मांगलिक व्यक्ति इस शक्तिशाली ग्रहीय बल को श्राप नहीं, शक्ति के रूप में उपयोग कर सके।' },
    ],
    benefits: [
      { en: 'Harmonizes marital relationships by cooling the aggressive Mars energy that causes conflict, mistrust, and emotional distance between partners.', hi: 'उस आक्रामक मंगल ऊर्जा को शीतल करके वैवाहिक संबंधों में सामंजस्य स्थापित करता है जो भागीदारों के बीच संघर्ष और भावनात्मक दूरी पैदा करती है।' },
      { en: "Reduces the frequency of accidents, injuries, and sudden health emergencies by calming the hyper-active martian planetary vibration in the horoscope.", hi: 'कुंडली में अति सक्रिय मार्शल ग्रहीय कंपन को शांत करके दुर्घटनाओं, चोटों और अचानक स्वास्थ्य आपात स्थितियों की आवृत्ति को कम करता है।' },
      { en: "Removes the traditional 'Manglik' barrier to marriage, making it spiritually safe and auspicious to wed even a non-Manglik partner.", hi: "विवाह में पारंपरिक 'मांगलिक' बाधा को दूर करता है और गैर-मांगलिक साथी से विवाह को आध्यात्मिक रूप से सुरक्षित और शुभ बनाता है।" },
      { en: 'Transforms fiery temper and impulsiveness into focused willpower, competitive strength, and dynamic leadership qualities beneficial for career success.', hi: 'उग्र स्वभाव और आवेग को केंद्रित इच्छाशक्ति, प्रतिस्पर्धी शक्ति और कैरियर सफलता के लिए गतिशील नेतृत्व गुणों में बदलता है।' },
      { en: "Protects property, land, and real estate interests from disputes, encroachments, and unexpected financial losses linked to Mars' malefic influence.", hi: 'संपत्ति, भूमि और अचल संपत्ति हितों को मंगल के अशुभ प्रभाव से जुड़े विवादों और अप्रत्याशित वित्तीय नुकसान से बचाता है।' },
      { en: "Boosts courage, willpower, and physical vitality — turning the Manglik's greatest planetary challenge into their most powerful cosmic advantage.", hi: 'साहस, इच्छाशक्ति और शारीरिक जीवन शक्ति को बढ़ाता है — मांगलिक की सबसे बड़ी ग्रहीय चुनौती को उनके सबसे शक्तिशाली ब्रह्मांडीय लाभ में बदलता है।' },
    ],
    steps: [
      { title: 'Mangal Yantra Sthapana', desc: 'A sacred Mars Yantra is installed and energized at the altar to create a powerful focal point for Martian divine energy.' },
      { title: 'Ganesh Puja', desc: 'Lord Ganesha is worshipped first with red flowers and modak to bless the ritual and remove all planetary obstacles from the path.' },
      { title: 'Mangal Graha Puja', desc: 'Planet Mars is invoked with red coral, red sandalwood, red flowers, and ghee lamp while chanting 108 names of Mangal Deva.' },
      { title: 'Hanuman Puja', desc: "Lord Hanuman — the divine controller of Mars — is worshipped with sindoor, jasmine oil, and powerful Hanuman Chalisa recitation." },
      { title: 'Mangal Mantra Jaap', desc: "The sacred Mangal Beej Mantra 'Om Kraam Kreem Kraum Sah Bhaumaya Namah' is chanted 10,000 times for complete Martian appeasement." },
      { title: 'Kuja Dosh Nivaran Homa', desc: 'A sacred fire ritual is performed with red flowers, sesame seeds, and copper offerings while chanting Navgraha mantras into the Agni.' },
      { title: 'Copper Vessel Offering', desc: "Jaggery, red lentils (masoor dal), and red cloth are offered into flowing water as Mars' favorite symbolic offerings." },
      { title: 'Mangalnath Darshan', desc: "If possible, the devotee visits a Mangal temple (Ujjain's Mangalnath is ideal) on a Tuesday for a spiritually potent conclusion." },
      { title: 'Prasad Distribution', desc: 'Sweet red-colored prasad is distributed to all, and the devotee ties a red thread on the wrist as a protective Mangal shield.' },
    ],
  },
  {
    file: 'ShaniDoshPujaPage.jsx',
    component: 'ShaniDoshPujaPage',
    id: 'shani-dosh-puja',
    name: 'Shani Dosh Puja',
    heroTitleMain: 'Shani Dosh',
    heroTitleAccent: 'Puja',
    quote: "Appease Saturn, and hardship transforms into unshakable strength.",
    subtitle: "A deeply transformative Vedic puja to pacify Lord Saturn's karmic lessons of delay, loss, and struggle.",
    colorClass: 'shani',
    icon: '⚫',
    shortDesc: {
      en: 'A deeply transformative Vedic puja to pacify Lord Saturn — the cosmic taskmaster — whose intense karmic lessons manifest as delays, losses, hardships, and life-altering trials when malefic in the chart.',
      hi: 'एक गहरा परिवर्तनकारी वैदिक पूजा जो भगवान शनि — ब्रह्मांडीय कर्म-शिक्षक — को शांत करने के लिए है, जिनके तीव्र कर्म-पाठ कुंडली में अशुभ होने पर देरी, नुकसान, कठिनाइयां और जीवन-परिवर्तनकारी परीक्षाओं के रूप में प्रकट होते हैं।',
    },
    whatIs: {
      en: `Shani Dosh Puja is a sacred ritual of cosmic courage — a spiritual confrontation with Saturn, the most feared and most respected planet in all of Vedic astrology. Lord Shani is the karmic judge of the universe, the divine deliverer of consequences, the cold and calculated teacher who strips away illusions and demands absolute truth from every soul he touches.

Shani Dosh arises when Saturn is placed in an unfavorable position in one's horoscope — particularly during Sade Sati (the dreaded 7.5-year Saturn transit over the Moon), Dhaiya (2.5-year transit), or when Saturn afflicts key houses causing major life disruptions. The effects are unmistakable: sudden job loss, financial ruin, relationship breakdown, prolonged illness, public disgrace, or the terrifying feeling that life has simply stopped moving forward.

But Saturn is not the enemy. He is the greatest teacher — the one who dismantles what is false so that what is real can rise. Shani Dosh Puja is the devotee's sacred dialogue with this cosmic force — an act of acceptance, surrender, and devotion that transforms Saturn's harsh lessons into stepping stones of unshakeable strength, wisdom, and ultimate prosperity. Those who please Shani receive his most profound gift: unbreakable resilience and lasting success.`,
      hi: `शनि दोष पूजा ब्रह्मांडीय साहस का एक पवित्र अनुष्ठान है — शनि के साथ एक आध्यात्मिक सामना, जो संपूर्ण वैदिक ज्योतिष में सबसे भयभीत और सबसे सम्मानित ग्रह है। भगवान शनि ब्रह्मांड के कर्म न्यायाधीश हैं, परिणामों के दिव्य प्रदाता, ठंडे और सुविचारित शिक्षक जो भ्रम को तोड़ते हैं और हर आत्मा से पूर्ण सत्य मांगते हैं।

शनि दोष तब उत्पन्न होता है जब शनि कुंडली में प्रतिकूल स्थिति में होता है — विशेषकर साढ़े साती (चंद्रमा पर शनि का 7.5 साल का भयंकर गोचर), ढैया (2.5 साल का गोचर), या जब शनि प्रमुख भावों को पीड़ित करता है। प्रभाव अचूक हैं: अचानक नौकरी जाना, वित्तीय बर्बादी, रिश्तों का टूटना, लंबी बीमारी।

लेकिन शनि शत्रु नहीं है। वे सबसे महान शिक्षक हैं — जो असत्य को तोड़ते हैं ताकि सत्य उठ सके। शनि दोष पूजा इस ब्रह्मांडीय शक्ति के साथ भक्त का पवित्र संवाद है — स्वीकृति, समर्पण और भक्ति का एक कार्य जो शनि के कठोर पाठों को अटूट शक्ति, ज्ञान और स्थायी समृद्धि की सीढ़ियों में बदल देता है।`,
    },
    why: [
      { en: "During the terrifying phase of Sade Sati or Dhaiya, when Saturn's shadow falls hard on life, this puja is the most effective spiritual remedy to reduce its devastating and relentless impact.", hi: 'साढ़े साती या ढैया के भयावह चरण के दौरान, जब शनि का साया जीवन पर कड़ी चोट करता है, तो यह पूजा इसके विनाशकारी प्रभाव को कम करने का सबसे प्रभावी आध्यात्मिक उपाय है।' },
      { en: "Sudden job loss, financial collapse, reputation damage, and persistent career blockages are signals of Saturn's wrath that can be neutralized through sincere, heartfelt Shani worship and puja.", hi: 'अचानक नौकरी जाना, वित्तीय पतन, प्रतिष्ठा क्षति और लगातार कैरियर रुकावटें शनि के प्रकोप के संकेत हैं जिन्हें हार्दिक शनि पूजा के माध्यम से निष्क्रिय किया जा सकता है।' },
      { en: "Chronic physical ailments, especially bone, joint, nerve, or skin diseases associated with Saturn's body dominion, are relieved through this puja's healing vibration and divine intervention.", hi: 'दीर्घकालिक शारीरिक बीमारियां, विशेषकर हड्डी, जोड़, तंत्रिका या त्वचा रोग जो शनि के शरीर-प्रभुत्व से जुड़े हैं, इस पूजा की उपचार कंपन से राहत पाते हैं।' },
      { en: "When a person experiences public humiliation, false accusations, legal troubles, or social isolation, Shani Dosh Puja is performed to restore dignity, truth, and social standing through Saturn's justice.", hi: 'जब कोई व्यक्ति सार्वजनिक अपमान, झूठे आरोपों, कानूनी परेशानियों का सामना करता है, तो शनि दोष पूजा शनि के न्याय के माध्यम से गरिमा और सामाजिक स्थिति को बहाल करने के लिए की जाती है।' },
      { en: "To convert Saturn's punishing energy into Saturn's rewarding energy — because a pleased Shani blesses with extraordinary discipline, wealth, and longevity that no other planetary deity can provide.", hi: 'शनि की दंडनीय ऊर्जा को पुरस्कृत ऊर्जा में बदलने के लिए — क्योंकि प्रसन्न शनि असाधारण अनुशासन, धन और दीर्घायु का आशीर्वाद देते हैं जो कोई अन्य ग्रह देवता नहीं दे सकता।' },
      { en: "Saturn rules karma and justice — people perform this puja to clear past-life karmic debts faster, so that they don't have to suffer the full weight of Saturn's slow, grinding karmic repayment plan.", hi: 'शनि कर्म और न्याय पर शासन करते हैं — लोग पिछले जन्म के कर्म ऋणों को तेजी से साफ करने के लिए यह पूजा करते हैं, ताकि उन्हें शनि की धीमी कर्म-पुनर्भुगतान योजना का पूरा बोझ न उठाना पड़े।' },
    ],
    benefits: [
      { en: 'Significantly reduces the severity of Sade Sati and Dhaiya phases, transforming the most challenging Saturn transit into a period of manageable growth.', hi: 'साढ़े साती और ढैया चरणों की गंभीरता को काफी कम करता है, शनि के सबसे चुनौतीपूर्ण गोचर को प्रबंधनीय विकास की अवधि में बदलता है।' },
      { en: "Restores stalled career, blocked promotions, and professional setbacks by removing Saturn's restrictive energy from the path of progress and ambition.", hi: 'शनि की प्रतिबंधात्मक ऊर्जा को प्रगति के मार्ग से हटाकर रुके कैरियर, अवरुद्ध पदोन्नति और पेशेवर झटकों को बहाल करता है।' },
      { en: 'Heals Saturn-related physical ailments including joint pain, chronic fatigue, skin problems, and neurological issues through spiritual purification.', hi: 'आध्यात्मिक शुद्धिकरण के माध्यम से जोड़ों के दर्द, पुरानी थकान, त्वचा की समस्याओं और तंत्रिका संबंधी समस्याओं सहित शनि से संबंधित शारीरिक बीमारियों को ठीक करता है।' },
      { en: "Accelerates karmic clearance, allowing the devotee to emerge from Saturn's lessons faster and with greater wisdom rather than prolonged suffering.", hi: 'कर्मिक निकासी को तेज करता है, जिससे भक्त को लंबे समय तक कष्ट भोगने के बजाय शनि के पाठों से तेजी और अधिक ज्ञान के साथ उभरने का अवसर मिलता है।' },
      { en: "Attracts Saturn's most powerful blessings — extraordinary discipline, structured wealth-building, and a long, meaningful life filled with purposeful achievement.", hi: 'शनि के सबसे शक्तिशाली आशीर्वाद को आकर्षित करता है — असाधारण अनुशासन, संरचित धन-निर्माण और सार्थक उपलब्धि से भरा दीर्घ, अर्थपूर्ण जीवन।' },
      { en: "Protects against enemies, false accusations, legal battles, and social disgrace by invoking Saturn's highest virtue — absolute cosmic justice and truth.", hi: 'शत्रुओं, झूठे आरोपों, कानूनी लड़ाइयों और सामाजिक अपमान से बचाता है, शनि के सर्वोच्च गुण — पूर्ण ब्रह्मांडीय न्याय और सत्य को आमंत्रित करके।' },
    ],
    steps: [
      { title: 'Shani Yantra Installation', desc: "A sacred Shani Yantra is consecrated and installed facing west — Saturn's direction — on a Saturday for maximum potency." },
      { title: 'Black Sesame Bath (Til Snan)', desc: "The devotee bathes with black sesame-infused water to symbolically absorb Saturn's cleansing and purifying spiritual energy." },
      { title: 'Shani Stotra Recitation', desc: 'The Shani Stotra and Shani Kavach are recited with complete devotion to build a divine protective shield around the devotee.' },
      { title: 'Navgraha Puja with Shani Focus', desc: "All nine planets are worshipped, with special emphasis on Shani's blue sapphire-colored offerings and iron lamp lighting." },
      { title: 'Shani Beej Mantra Jaap', desc: "The Beej Mantra 'Om Praam Preem Praum Sah Shanaischaraya Namah' is chanted 23,000 times for complete Shani appeasement." },
      { title: 'Shani Homa', desc: 'Sacred fire is offered with blue flowers, black sesame, iron filings, and mustard oil into the homa kund with Vedic chants.' },
      { title: 'Shani Tailabhishek', desc: "Mustard oil is poured over a Shani idol or Shami tree — Saturn's sacred tree — as his most beloved and cooling offering." },
      { title: 'Feeding the Needy', desc: "Black urad dal, black sesame rice, and black cloth are distributed to the underprivileged as Shani's most powerful appeasement remedy." },
      { title: 'Saturn Temple Visit', desc: 'The puja concludes with a visit to a Shani temple on Saturday evening, lighting a sesame oil lamp and offering iron coins with reverence.' },
    ],
  },
  {
    file: 'GrahanDoshPujaPage.jsx',
    component: 'GrahanDoshPujaPage',
    id: 'grahan-dosh-puja',
    name: 'Grahan Dosh Puja',
    heroTitleMain: 'Grahan Dosh',
    heroTitleAccent: 'Puja',
    quote: 'When eclipse shadow lifts, inner light returns.',
    subtitle: 'A mystical Vedic ritual to dissolve Rahu-Ketu eclipse shadows over Sun and Moon in the birth chart.',
    colorClass: 'grahan',
    icon: '🌑',
    shortDesc: {
      en: "A rare and mystical Vedic ritual performed to eliminate the shadow curse of Rahu and Ketu — the eclipse nodes — whose cosmic conjunction with the Sun or Moon creates profound darkness in a person's mind, destiny, and divine connection.",
      hi: 'एक दुर्लभ और रहस्यमय वैदिक अनुष्ठान जो राहु और केतु — ग्रहण ग्रहों — की छाया श्राप को समाप्त करने के लिए किया जाता है, जिनका सूर्य या चंद्रमा के साथ ब्रह्मांडीय संयोग व्यक्ति के मन, भाग्य और दिव्य संबंध में गहरा अंधकार पैदा करता है।',
    },
    whatIs: {
      en: `Grahan Dosh Puja is one of the most mysterious and powerful remedial rituals in Vedic astrology — performed to break the cosmic shadow cast by Rahu (North Node) and Ketu (South Node) when they conjunct or closely afflict the Sun or Moon in a person's natal chart. The word "Grahan" literally means eclipse, and an eclipse, in spiritual terms, represents the temporary but devastating darkening of one's inner light.

When the Sun is eclipsed by Rahu or Ketu in the horoscope, it creates Surya Grahan Dosh — affecting the person's self-confidence, authority, father's health, government relations, and soul identity. When the Moon is afflicted, it creates Chandra Grahan Dosh — causing severe emotional instability, mental health challenges, disturbed sleep, anxiety, disconnection from one's mother, and a deep, inexplicable inner darkness.

People with Grahan Dosh often feel as though a perpetual fog surrounds their life — clarity is elusive, success slips away at the last moment, and emotional peace feels permanently out of reach. The puja performed on solar or lunar eclipse days carries ten thousand times the spiritual potency of a normal day. Through this ritual, the shadow of Rahu and Ketu is ceremonially dissolved, the luminaries are restored to their divine brilliance, and the devotee reclaims their inner light.`,
      hi: `ग्रहण दोष पूजा वैदिक ज्योतिष में सबसे रहस्यमय और शक्तिशाली उपचारात्मक अनुष्ठानों में से एक है — जो राहु (उत्तरी नोड) और केतु (दक्षिणी नोड) द्वारा डाली गई ब्रह्मांडीय छाया को तोड़ने के लिए की जाती है। "ग्रहण" का शाब्दिक अर्थ ग्रहण है, और आध्यात्मिक दृष्टि से ग्रहण अपने आंतरिक प्रकाश के अस्थायी लेकिन विनाशकारी कालेपन का प्रतिनिधित्व करता है।

जब सूर्य राहु या केतु से ग्रस्त होता है, तो सूर्य ग्रहण दोष बनता है — व्यक्ति का आत्मविश्वास, अधिकार, पिता का स्वास्थ्य और आत्मा की पहचान प्रभावित होती है। जब चंद्रमा पीड़ित होता है, तो चंद्र ग्रहण दोष बनता है — गंभीर भावनात्मक अस्थिरता, मानसिक स्वास्थ्य चुनौतियां, परेशान नींद, चिंता और गहरा अकारण अंतर्मन का अंधकार पैदा होता है।

ग्रहण दोष वाले लोग अक्सर महसूस करते हैं कि उनके जीवन के चारों ओर एक स्थायी धुंध है। सौर या चंद्र ग्रहण के दिन की गई पूजा सामान्य दिन की तुलना में दस हजार गुना आध्यात्मिक शक्ति रखती है।`,
    },
    why: [
      { en: "Rahu and Ketu's eclipse over the Sun or Moon creates an unshakeable mental fog — perpetual confusion, self-doubt, and identity crisis that this puja dissolves through divine solar and lunar restoration.", hi: 'सूर्य या चंद्रमा पर राहु और केतु का ग्रहण एक अटूट मानसिक धुंध बनाता है — स्थायी भ्रम, आत्म-संदेह — जिसे यह पूजा दिव्य सूर्य-चंद्र पुनर्स्थापना के माध्यम से विघटित करती है।' },
      { en: 'People born during an actual solar or lunar eclipse carry this dosh from birth — and this puja is the specific, targeted remedy to neutralize the lifelong shadow of the eclipse they were born under.', hi: 'वास्तविक सूर्य या चंद्र ग्रहण के दौरान पैदा हुए लोग जन्म से यह दोष लेकर आते हैं — और यह पूजा उनके जन्म के ग्रहण की आजीवन छाया को निष्क्रिय करने का विशिष्ट उपाय है।' },
      { en: "Chandra Grahan Dosh causes severe depression, phobias, and disconnection from reality. This puja heals the psychic wounds of the moon and restores emotional clarity, stability, and motherly warmth.", hi: 'चंद्र ग्रहण दोष गंभीर अवसाद, भय और वास्तविकता से वियोग का कारण बनता है। यह पूजा चंद्रमा के मानसिक घावों को ठीक करती है और भावनात्मक स्पष्टता और मातृ स्नेह को बहाल करती है।' },
      { en: "Surya Grahan Dosh destroys confidence, authority, and the relationship with the father or government. This puja restores the solar light of self-worth, power, and divine recognition in the person's life.", hi: 'सूर्य ग्रहण दोष आत्मविश्वास, अधिकार और पिता या सरकार के साथ संबंध नष्ट करता है। यह पूजा व्यक्ति के जीवन में आत्म-मूल्य और दिव्य मान्यता के सौर प्रकाश को बहाल करती है।' },
      { en: 'Success that repeatedly comes close and then slips away, opportunities that vanish at the last moment, relationships that darken suddenly — all classic Grahan Dosh signs that this puja powerfully addresses.', hi: 'सफलता जो बार-बार करीब आती है और फिर फिसल जाती है, अवसर जो अंतिम क्षण में गायब होते हैं — ये सभी ग्रहण दोष के क्लासिक संकेत हैं जिन्हें यह पूजा शक्तिशाली ढंग से संबोधित करती है।' },
      { en: 'Eclipse days are cosmically charged windows of extraordinary spiritual power. Performing this puja on an actual Grahan day multiplies its healing power ten-thousandfold compared to any ordinary day.', hi: 'ग्रहण के दिन असाधारण आध्यात्मिक शक्ति की ब्रह्मांडीय रूप से आवेशित खिड़कियां हैं। वास्तविक ग्रहण दिन पर यह पूजा करना इसकी उपचार शक्ति को सामान्य दिन की तुलना में दस हजार गुना बढ़ा देता है।' },
    ],
    benefits: [
      { en: 'Lifts the perpetual mental fog of Grahan Dosh, restoring sharp mental clarity, decisive confidence, and a radiant sense of personal identity and purpose.', hi: 'ग्रहण दोष की स्थायी मानसिक धुंध को उठाता है, तीव्र मानसिक स्पष्टता, निर्णायक आत्मविश्वास और व्यक्तिगत पहचान की दीप्तिमान भावना को बहाल करता है।' },
      { en: "Heals deep emotional wounds, chronic depression, phobias, and psychological instability rooted in the eclipsed Moon's shadow over the mind.", hi: 'ग्रस्त चंद्रमा की मन पर छाया में निहित गहरे भावनात्मक घावों, पुरानी अवसाद, भय और मनोवैज्ञानिक अस्थिरता को ठीक करता है।' },
      { en: "Restores blocked success, fame, and recognition by liberating the Sun from Rahu/Ketu's shadow and reigniting the person's solar power and authority.", hi: 'सूर्य को राहु/केतु की छाया से मुक्त करके और व्यक्ति की सौर शक्ति को पुनः प्रज्वलित करके अवरुद्ध सफलता, प्रसिद्धि और मान्यता को बहाल करता है।' },
      { en: 'Repairs the relationship with the father (Sun) and mother (Moon), healing family wounds and restoring love, respect, and emotional connection to these vital bonds.', hi: 'पिता (सूर्य) और माता (चंद्रमा) के साथ संबंध की मरम्मत करता है, पारिवारिक घावों को ठीक करता है और इन महत्वपूर्ण बंधनों में प्रेम और भावनात्मक संबंध को बहाल करता है।' },
      { en: 'Clears Rahu/Ketu karmic residue from past lives, breaking cycles of confusion, spiritual blindness, and self-destructive patterns carried across multiple incarnations.', hi: 'पिछले जन्मों से राहु/केतु कर्म अवशेषों को साफ करता है, कई जन्मों में किए जा रहे भ्रम, आध्यात्मिक अंधापन और आत्म-विनाशकारी पैटर्न के चक्रों को तोड़ता है।' },
      { en: "Dramatically amplifies spiritual growth and intuitive powers — because once the eclipse lifts, the soul's connection to divine cosmic consciousness becomes brilliantly clear.", hi: 'आध्यात्मिक विकास और सहज शक्तियों को नाटकीय रूप से बढ़ाता है — क्योंकि ग्रहण के उठते ही आत्मा का दिव्य ब्रह्मांडीय चेतना से संबंध शानदार रूप से स्पष्ट हो जाता है।' },
    ],
    steps: [
      { title: 'Pradosh Snan (Pre-dawn Bath)', desc: "The devotee bathes before sunrise — ideally in a holy river — to purify the aura and create sacred receptivity to the ritual's power." },
      { title: 'Surya/Chandra Puja', desc: 'The Sun or Moon (depending on the type of Grahan Dosh) is worshipped with arghya (water offering), white flowers, and Vedic solar/lunar mantras.' },
      { title: 'Rahu-Ketu Shanti Puja', desc: 'Rahu and Ketu are propitiated with blue and grey flowers, multi-colored cloth, and coal offerings to neutralize their shadowing eclipse energy.' },
      { title: 'Mahamrityunjaya Jaap', desc: "The Mahamrityunjaya Mantra is chanted 1,008 times to invoke Lord Shiva's divine protective light against the darkness of Grahan Dosh." },
      { title: 'Grahan Nivaran Homa', desc: 'A special homa is performed with mixed herbs, camphor, and ghee — the sacred fire symbolically consuming and dissolving the eclipse shadow.' },
      { title: 'Navagraha Shanti', desc: 'All nine planets are collectively pacified with tailored offerings to create planetary harmony and remove conflict between luminaries and shadow planets.' },
      { title: 'Surya/Chandra Yantra Energization', desc: 'A Surya or Chandra Yantra is energized and given to the devotee to wear or keep at the altar as a permanent anti-eclipse protective shield.' },
      { title: 'Eclipse Day Optional Ritual', desc: 'If possible, the core rituals are performed during an actual solar or lunar eclipse for ten-thousand-fold amplification of the puja\'s healing potency.' },
      { title: 'Visarjan and Prasad', desc: 'The ritual concludes by releasing offerings into flowing water at sunset, and white sweet rice (kheer) prasad is distributed to all present.' },
    ],
  },
  {
    file: 'VastuDoshPujaPage.jsx',
    component: 'VastuDoshPujaPage',
    id: 'vastu-dosh-puja',
    name: 'Vastu Dosh Puja',
    heroTitleMain: 'Vastu Dosh',
    heroTitleAccent: 'Puja',
    quote: 'When space is healed, life begins to flow in harmony.',
    subtitle: 'A sacred Vedic architectural cleansing to rebalance five elements and restore prosperity, peace, and protection.',
    colorClass: 'vastu',
    icon: '🏛️',
    shortDesc: {
      en: 'A sacred architectural healing ritual of Vedic science that purifies and rebalances the five elemental energies within a home or property, transforming spaces of discord and stagnation into vibrant temples of prosperity and harmony.',
      hi: 'वैदिक विज्ञान का एक पवित्र वास्तुकला उपचार अनुष्ठान जो घर या संपत्ति के भीतर पांच तात्विक ऊर्जाओं को शुद्ध और पुनर्संतुलित करता है, कलह और ठहराव के स्थानों को समृद्धि और सद्भाव के जीवंत मंदिरों में बदलता है।',
    },
    whatIs: {
      en: `Vastu Dosh Puja is the sacred science of healing your living space — a profound ritual rooted in Vastu Shastra, the ancient Indian architectural wisdom that teaches how cosmic energies flow through our built environments. Just as the human body requires healthy circulation of energy (prana), every home, office, or property requires a balanced flow of the five elements — Earth, Water, Fire, Air, and Space — to support the wellbeing, prosperity, and happiness of those who inhabit it.

When a building is constructed with incorrect directional placements, blocked or imbalanced elemental zones, structural defects, or simply inherits the negative energy of previous occupants, it develops what is known as Vastu Dosh. The effects are strikingly personal: families in Vastu-defective homes report constant quarreling, financial drainage, chronic illness, disturbed sleep, failed businesses, and an oppressive heaviness that makes the home feel like a trap rather than a sanctuary.

Vastu Dosh Puja is the spiritual surgeon's answer — a ceremonial deep cleanse that removes accumulated negative energies, harmonizes the five elements, invokes protective divine presences into every corner of the space, and reprograms the home's energy field to radiate prosperity, love, and divine abundance. After this puja, residents consistently report that their home feels lighter, their relationships become warmer, and opportunities begin flowing again as if the universe has reopened its doors.`,
      hi: `वास्तु दोष पूजा आपके रहने की जगह को ठीक करने का पवित्र विज्ञान है — एक गहन अनुष्ठान जो वास्तु शास्त्र में निहित है, वह प्राचीन भारतीय वास्तुकला ज्ञान जो सिखाता है कि ब्रह्मांडीय ऊर्जाएं हमारे निर्मित वातावरण से कैसे प्रवाहित होती हैं। जैसे मानव शरीर को ऊर्जा (प्राण) के स्वस्थ संचलन की आवश्यकता है, वैसे ही प्रत्येक घर, कार्यालय को पांच तत्वों — पृथ्वी, जल, अग्नि, वायु और आकाश — के संतुलित प्रवाह की आवश्यकता है।

जब एक इमारत गलत दिशा-स्थापनाओं के साथ बनाई जाती है, या पिछले निवासियों की नकारात्मक ऊर्जा विरासत में मिलती है, तो वास्तु दोष विकसित होता है। प्रभाव आश्चर्यजनक रूप से व्यक्तिगत होते हैं: वास्तु-दोषयुक्त घरों में परिवार लगातार झगड़ते हैं, वित्तीय नुकसान होता है, बीमारियां रहती हैं।

वास्तु दोष पूजा इस समस्या का आध्यात्मिक शल्य-चिकित्सक का उत्तर है — एक औपचारिक गहरी सफाई जो नकारात्मक ऊर्जाओं को हटाती है, पांच तत्वों को सामंजस्य बनाती है, और घर के ऊर्जा क्षेत्र को समृद्धि, प्रेम और दिव्य प्रचुरता विकिरण करने के लिए पुनः प्रोग्राम करती है।`,
    },
    why: [
      { en: 'When a family experiences constant arguing, unexplained tension, and emotional distance despite loving intentions, it signals Vastu imbalance — and this puja restores the home\'s energetic harmony and peace.', hi: 'जब एक परिवार प्रेमपूर्ण इरादों के बावजूद लगातार बहस, अकारण तनाव और भावनात्मक दूरी का अनुभव करता है, तो यह वास्तु असंतुलन का संकेत है — और यह पूजा घर की ऊर्जावान सद्भावना को बहाल करती है।' },
      { en: 'Businesses operating from Vastu-defective spaces face customer loss, cash flow problems, and partnership disputes. This puja restructures the commercial space\'s energy to attract prosperity and growth.', hi: 'वास्तु-दोषयुक्त स्थानों से संचालित व्यवसायों को ग्राहक हानि और नकदी प्रवाह समस्याओं का सामना करना पड़ता है। यह पूजा व्यावसायिक स्थान की ऊर्जा को पुनर्संरचित करती है।' },
      { en: 'Family members in Vastu-defective homes suffer from insomnia, chronic illness, and low immunity. The puja purifies the elemental energies that directly impact health and biological vitality of residents.', hi: 'वास्तु-दोषयुक्त घरों में परिवार के सदस्य अनिद्रा, पुरानी बीमारी से पीड़ित होते हैं। यह पूजा तात्विक ऊर्जाओं को शुद्ध करती है जो निवासियों के स्वास्थ्य को सीधे प्रभावित करती हैं।' },
      { en: 'When structural changes to correct Vastu defects are impossible (in rented or ancient properties), this puja serves as the most effective non-structural spiritual remedy to neutralize the architectural flaws.', hi: 'जब वास्तु दोषों को सुधारने के लिए संरचनात्मक परिवर्तन असंभव हों (किराए या प्राचीन संपत्तियों में), तो यह पूजा वास्तुकला दोषों को निष्क्रिय करने के लिए सबसे प्रभावी गैर-संरचनात्मक उपाय है।' },
      { en: 'Moving into a new home or opening a new office — this puja is performed to spiritually consecrate the space, remove any negative residual energy from previous occupants and establish divine protection.', hi: 'नए घर में जाते समय या नया कार्यालय खोलते समय — यह पूजा स्थान को आध्यात्मिक रूप से पवित्र करने, पिछले निवासियों की नकारात्मक ऊर्जा को हटाने और दिव्य सुरक्षा स्थापित करने के लिए की जाती है।' },
      { en: 'Properties near cremation grounds, hospitals, or with negative historical events embedded in the land carry heavy energetic residue. Vastu Dosh Puja is performed to spiritually cleanse and reset the property\'s energy.', hi: 'श्मशान, अस्पतालों के पास की संपत्तियां या भूमि में निहित नकारात्मक ऐतिहासिक घटनाओं वाली संपत्तियां भारी ऊर्जावान अवशेष रखती हैं। वास्तु दोष पूजा संपत्ति की ऊर्जा को शुद्ध और रीसेट करती है।' },
    ],
    benefits: [
      { en: 'Transforms the home\'s atmosphere from heavy and oppressive to light, welcoming, and filled with genuine warmth, positivity, and divine protective energy.', hi: 'घर के वातावरण को भारी और दमनकारी से हल्का, स्वागत योग्य और वास्तविक गर्मजोशी, सकारात्मकता और दिव्य सुरक्षात्मक ऊर्जा से भरे में बदलता है।' },
      { en: 'Dramatically improves financial flow — blocked income, stalled investments, and repeated business losses begin to reverse as elemental energies are realigned and harmonized.', hi: 'वित्तीय प्रवाह में नाटकीय रूप से सुधार करता है — अवरुद्ध आय, रुके निवेश और बार-बार व्यापारिक नुकसान उलटने लगते हैं क्योंकि तात्विक ऊर्जाएं पुनः संरेखित होती हैं।' },
      { en: 'Resolves chronic family conflicts and relationship tensions, replacing discord with understanding, patience, and a deeply harmonious family environment that nurtures everyone\'s growth.', hi: 'पुराने पारिवारिक संघर्षों और रिश्तों के तनाव को हल करता है, कलह को समझ, धैर्य और गहराई से सामंजस्यपूर्ण पारिवारिक वातावरण से बदलता है।' },
      { en: 'Significantly improves sleep quality, energy levels, and overall physical health of all residents by purifying the elemental energies that the human body interacts with daily.', hi: 'दैनिक रूप से मानव शरीर के साथ बातचीत करने वाली तात्विक ऊर्जाओं को शुद्ध करके सभी निवासियों की नींद की गुणवत्ता, ऊर्जा स्तर और समग्र शारीरिक स्वास्थ्य में महत्वपूर्ण सुधार करता है।' },
      { en: 'Protects the property and residents from accidents, theft, fire, natural disasters, and negative external energies by establishing a powerful divine energy shield around the entire premises.', hi: 'पूरे परिसर के चारों ओर एक शक्तिशाली दिव्य ऊर्जा ढाल स्थापित करके संपत्ति और निवासियों को दुर्घटनाओं, चोरी, आग, प्राकृतिक आपदाओं से बचाता है।' },
      { en: 'Activates the home\'s prosperity zones — the north for wealth, northeast for wisdom, east for health — drawing cosmic abundance directly into the family\'s physical living space.', hi: 'घर के समृद्धि क्षेत्रों को सक्रिय करता है — उत्तर धन के लिए, उत्तर-पूर्व ज्ञान के लिए, पूर्व स्वास्थ्य के लिए — ब्रह्मांडीय प्रचुरता को सीधे परिवार के भौतिक रहने की जगह में खींचता है।' },
    ],
    steps: [
      { title: 'Vastu Purush Puja', desc: 'The Vastu Purush — the divine cosmic being residing within the property — is invoked and worshipped with offerings of five grains and sacred flowers.' },
      { title: 'Panchabhoota Sthapana', desc: 'The five elements (Earth, Water, Fire, Air, Space) are ceremonially represented and balanced in their correct directional positions within the property.' },
      { title: 'Ganesh Puja at Main Entrance', desc: 'Lord Ganesha is worshipped at the main entrance door as the guardian of thresholds — removing negative energies that enter through the primary gateway.' },
      { title: 'Navgraha Puja in Center', desc: 'All nine planets are worshipped at the Brahmasthana (center) of the property, the energetic heart of the entire space, to harmonize cosmic energies.' },
      { title: 'Sacred Smoke Purification (Dhoop)', desc: 'The entire property is purified room by room with sacred Vastu herbs, guggul resin, camphor, and cow dung smoke to cleanse negative energetic residue.' },
      { title: 'Vastu Homa', desc: 'A sacred fire ritual is performed at the northeast corner — the most sacred Vastu direction — with offerings of ghee, sesame, and healing wood.' },
      { title: 'Vastu Yantra Installation', desc: 'A powerful Vastu Yantra is energized and installed at the Brahmasthana or main entrance to permanently stabilize and protect the property\'s energy field.' },
      { title: 'Holy Water Sprinkling (Jal Chhidakav)', desc: 'Ganga jal, turmeric water, and rose water are sprinkled in every room and corner, symbolically washing away all negative impressions from the space.' },
      { title: 'Griha Pravesh Ritual', desc: 'The puja concludes with a mini Griha Pravesh ceremony — lighting the home\'s sacred lamp and offering the first meal cooked in a now-purified, blessed space.' },
    ],
  },
]

const pack = [
  {
    id: 'saral',
    name: 'Saral Puja',
    sanskrit: 'सरल पूजा',
    price: 5100,
    duration: '2 Hours',
    pandits: '1 Pandit',
    chants: 'Core Japa',
    features: ['Basic samagri included', 'Sankalp in your name', 'Live video on request', 'Prasad couriered'],
  },
  {
    id: 'vishesh',
    name: 'Vishesh Puja',
    sanskrit: 'विशेष पूजा',
    price: 11100,
    duration: '4 Hours',
    pandits: '3 Pandits',
    chants: 'Advanced Japa',
    features: ['Premium samagri', 'Detailed havan', 'HD live streaming', 'Personalized sankalp video', 'Prasad + guidance'],
    popular: true,
  },
  {
    id: 'maha',
    name: 'Maha Puja',
    sanskrit: 'महा पूजा',
    price: 21100,
    duration: 'Full Day',
    pandits: '5 Pandits',
    chants: 'Maha Anushthan',
    features: ['Family sankalp', 'Extended multi-ritual vidhi', 'Grand havan sequence', 'Premium prasad hamper', 'Astrologer consultation'],
  },
]

function toJs(v) {
  return JSON.stringify(v, null, 2)
}

function buildPage(p) {
  return `import { useEffect, useState } from 'react'
import {
  FiAlertCircle,
  FiBookOpen,
  FiCalendar,
  FiCheck,
  FiChevronRight,
  FiClock,
  FiLoader,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiUser,
  FiUsers,
} from 'react-icons/fi'
import heroImage from '../../assets/puja/kalsarp-hero.jpg'
import ritualImage from '../../assets/puja/kalsarp-ritual.jpg'
import './KaalSarpDoshPujaStyle.css'

const PUJA_ID = ${JSON.stringify(p.id)}
const PUJA_NAME = ${JSON.stringify(p.name)}
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const CONTENT = ${toJs(p)}
const PACKAGES = ${toJs(pack)}

export default function ${p.component}() {
  const [selectedPkg, setSelectedPkg] = useState('vishesh')
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', gotra: '', date: '', time: '', message: '' })
  const [availability, setAvailability] = useState(null)
  const [status, setStatus] = useState('idle')
  const [statusMsg, setStatusMsg] = useState('')
  const [bookedInfo, setBookedInfo] = useState(null)

  useEffect(() => {
    if (!form.date) { setAvailability(null); return }
    fetch(\`\${API_BASE}/api/puja-bookings/availability?pujaId=\${PUJA_ID}&date=\${form.date}\`)
      .then(r => r.json())
      .then(data => setAvailability(data))
      .catch(() => setAvailability(null))
  }, [form.date])

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (status !== 'idle') { setStatus('idle'); setStatusMsg('') }
  }

  const isTimeConflict = time => {
    if (!availability || !time) return false
    return availability.bookedTimeWindows?.some(({ start, end }) => {
      const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m }
      const chosen = toMin(time)
      return chosen >= toMin(start) && chosen < toMin(end)
    })
  }

  const getTimeHint = () => {
    if (!availability) return null
    if (!availability.available) return { type: 'error', msg: 'No puja slots available for this date. Please choose another date.' }
    if (form.time && isTimeConflict(form.time)) return { type: 'error', msg: 'This time is within a locked slot. Please choose another time.' }
    return { type: 'ok', msg: \`\${availability.remainingSlots} slot(s) remaining today.\` }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.date || !form.time) {
      setStatus('error'); setStatusMsg('Please fill all required fields.'); return
    }
    if (isTimeConflict(form.time)) {
      setStatus('error'); setStatusMsg('Your chosen time conflicts with an existing booking. Please pick another slot.'); return
    }
    const pkg = PACKAGES.find(x => x.id === selectedPkg)
    setStatus('loading')
    try {
      const res = await fetch(\`\${API_BASE}/api/puja-bookings\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pujaId: PUJA_ID,
          pujaName: PUJA_NAME,
          name: form.name, email: form.email, phone: form.phone,
          address: form.address, gotra: form.gotra,
          bookingDate: form.date, startTime: form.time,
          package: selectedPkg, amount: pkg.price,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Booking failed.')
      setStatus('success')
      setStatusMsg(data.message)
      setBookedInfo(data.booking)
    } catch (err) {
      setStatus('error')
      setStatusMsg(err.message)
    }
  }

  const hint = getTimeHint()
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className={\`ks-page ks-theme-\${CONTENT.colorClass}\`}>
      <section className="ks-hero" style={{ '--ks-hero-image': \`url(\${heroImage})\` }}>
        <div className="ks-hero-overlay" />
        <div className="ks-hero-content">
          <p className="ks-badge">✦ Dosha Nivaran Series ✦</p>
          <h1>{CONTENT.heroTitleMain} <span>{CONTENT.heroTitleAccent}</span></h1>
          <p className="ks-quote">{CONTENT.quote}</p>
          <p className="ks-subtitle">{CONTENT.subtitle}</p>
          <div className="ks-actions">
            <a href="#booking" className="ks-btn ks-btn-gold">Book Your Sacred Puja <FiChevronRight /></a>
            <a href="#about" className="ks-btn ks-btn-outline">Learn the Significance</a>
          </div>
        </div>
      </section>

      <section id="about" className="ks-section">
        <div className="ks-container ks-about">
          <div className="ks-about-image"><img src={ritualImage} alt={\`\${PUJA_NAME} ritual\`} /></div>
          <div>
            <p className="ks-label">Sacred Understanding</p>
            <h2>{CONTENT.name}</h2>
            <div className="ks-bilingual-card">
              <p className="ks-bilingual-en">{CONTENT.shortDesc.en}</p>
              <p className="ks-bilingual-hi">{CONTENT.shortDesc.hi}</p>
            </div>
            {CONTENT.whatIs.en.split('\\n\\n').map((enP, i) => (
              <div key={i} className="ks-bilingual-card">
                <p className="ks-bilingual-en">{enP}</p>
                <p className="ks-bilingual-hi">{CONTENT.whatIs.hi.split('\\n\\n')[i] || ''}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ks-section ks-dark">
        <div className="ks-container">
          <p className="ks-label center">The Calling</p>
          <h2 className="center">Why Devotees Perform This Puja</h2>
          <div className="ks-point-list">
            {CONTENT.why.map((w, i) => (
              <div key={i} className="ks-point-card">
                <span className="ks-point-num">{i + 1}</span>
                <div>
                  <p className="ks-point-en">{w.en}</p>
                  <p className="ks-point-hi">{w.hi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ks-section">
        <div className="ks-container">
          <p className="ks-label center">Divine Benefits</p>
          <h2 className="center">Benefits of the Puja</h2>
          <div className="ks-point-list">
            {CONTENT.benefits.map((b, i) => (
              <div key={i} className="ks-point-card light">
                <span className="ks-point-num">{i + 1}</span>
                <div>
                  <p className="ks-point-en">{b.en}</p>
                  <p className="ks-point-hi">{b.hi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ks-section ks-process">
        <div className="ks-container">
          <p className="ks-label center">Sacred Vidhi</p>
          <h2 className="center">Ritual Process — Step by Step</h2>
          <div className="ks-point-list">
            {CONTENT.steps.map((s, i) => (
              <div key={i} className="ks-point-card light">
                <span className="ks-point-num">{i + 1}</span>
                <div>
                  <p className="ks-point-en"><strong>{s.title}</strong> — {s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="ks-section">
        <div className="ks-container">
          <p className="ks-label center">Choose Your Sankalp</p>
          <h2 className="center">Puja Packages</h2>
          <div className="ks-packages">
            {PACKAGES.map(pkg => (
              <div key={pkg.id} className={\`ks-package \${selectedPkg === pkg.id ? 'selected' : ''} \${pkg.popular ? 'popular' : ''}\`} onClick={() => setSelectedPkg(pkg.id)}>
                {pkg.popular && <div className="ks-pop">Most Chosen</div>}
                <p className="ks-sanskrit">{pkg.sanskrit}</p>
                <h3>{pkg.name}</h3>
                <div className="ks-price">₹{pkg.price.toLocaleString('en-IN')}</div>
                <div className="ks-package-meta">
                  <span><FiUsers /> {pkg.pandits}</span>
                  <span><FiClock /> {pkg.duration}</span>
                  <span><FiBookOpen /> {pkg.chants}</span>
                </div>
                <ul>{pkg.features.map((f, idx) => <li key={idx}><FiCheck /> {f}</li>)}</ul>
                <button className="ks-select">{selectedPkg === pkg.id ? '✓ Selected' : 'Select Package'}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="ks-section ks-book">
        <div className="ks-container">
          <p className="ks-label center">Book Your Sacred Date</p>
          <h2 className="center">Confirm Your Puja</h2>
          {status === 'success' ? (
            <div className="ks-success">
              <div className="ks-success-icon"><FiCheck /></div>
              <h3>Puja Booked Successfully! 🙏</h3>
              <p>{statusMsg}</p>
              {bookedInfo && (
                <div className="ks-summary-card">
                  <p><strong>Date:</strong> {bookedInfo.bookingDate}</p>
                  <p><strong>Time:</strong> {bookedInfo.startTime} – {bookedInfo.endTime}</p>
                  <p><strong>Status:</strong> {bookedInfo.status}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="ks-book-grid">
              <div className="ks-book-info">
                <p className="ks-book-chip"><FiCalendar /> Sacred Date Guidance</p>
                <h3>Take the first step toward divine correction.</h3>
                <p>Our senior pandit ji will guide the right muhurat and complete ritual flow based on your dosha details.</p>
                <div className="ks-book-points">
                  <div><FiPhone /> +91 98XXX XXXXX</div>
                  <div><FiMapPin /> Online and temple-based options</div>
                  <div><FiClock /> Available 7 AM - 9 PM (All days)</div>
                  <div><FiUsers /> Experienced Vedic ritual team</div>
                </div>
              </div>
              <form className="ks-form" onSubmit={handleSubmit}>
                <h4>Booking Form</h4>
                <div className="ks-grid">
                  <label><FiUser /> Full Name *<input name="name" value={form.name} onChange={handleChange} required /></label>
                  <label><FiPhone /> Phone *<input name="phone" type="tel" value={form.phone} onChange={handleChange} required /></label>
                  <label><FiMail /> Email *<input name="email" type="email" value={form.email} onChange={handleChange} required /></label>
                  <label><FiMapPin /> Birth Place<input name="address" value={form.address} onChange={handleChange} /></label>
                  <label>Gotra<input name="gotra" value={form.gotra} onChange={handleChange} /></label>
                  <label><FiCalendar /> Puja Date *<input name="date" type="date" min={today} value={form.date} onChange={handleChange} required /></label>
                  <label><FiClock /> Start Time *<input name="time" type="time" min="05:00" max="19:00" step="1800" value={form.time} onChange={handleChange} required /></label>
                  <label className="full"><FiMessageSquare /> Your Concern<textarea name="message" rows={3} value={form.message} onChange={handleChange} /></label>
                </div>
                {availability && <p className={\`ks-hint \${availability.available ? 'ok' : 'err'}\`}>{availability.available ? \`\${availability.remainingSlots}/\${availability.totalSlots} slots available\` : 'No slots available for this date'}</p>}
                {hint && <p className={\`ks-hint \${hint.type === 'ok' ? 'ok' : 'err'}\`}>{hint.msg}</p>}
                {status === 'error' && <div className="ks-error"><FiAlertCircle /> {statusMsg}</div>}
                <div className="ks-summary">Selected: <strong>{PACKAGES.find(p => p.id === selectedPkg)?.name}</strong> | Amount: <strong>₹{PACKAGES.find(p => p.id === selectedPkg)?.price.toLocaleString('en-IN')}</strong></div>
                <button type="submit" className="ks-submit" disabled={status === 'loading'}>
                  {status === 'loading' ? <><FiLoader className="spin" /> Processing...</> : '🪔 Confirm My Booking'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
`
}

for (const puja of PUJAS) {
  fs.writeFileSync(path.join(PAGES_DIR, puja.file), buildPage(puja), 'utf8')
  console.log(`updated ${puja.file}`)
}

