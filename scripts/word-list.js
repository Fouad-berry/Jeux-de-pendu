const wordList = [
          {
            word: "océan",
            hint: "Une vaste étendue d’eau salée couvrant la majeure partie de la surface terrestre."
          },
          {
            word: "Zeus",
            hint: "Le roi des dieux dans la mythologie grecque, dieu du ciel et de la foudre."
          },
          {
            word: "Héra",
            hint: "Épouse de Zeus, déesse du mariage et de la famille."
          },
          {
            word: "Poséidon",
            hint: "Dieu des mers et des océans, frère de Zeus."
          },
          {
            word: "Athéna",
            hint: "Déesse de la sagesse, de la stratégie guerrière et des arts."
          },
          {
            word: "Arès",
            hint: "Dieu de la guerre, réputé pour son caractère violent."
          },
          {
            word: "Aphrodite",
            hint: "Déesse de l’amour et de la beauté."
          },
          {
            word: "Hadès",
            hint: "Dieu des Enfers et souverain du monde des morts."
          },
          {
            word: "Hermès",
            hint: "Messager des dieux, dieu du commerce, des voyageurs et des voleurs."
          },
          {
            word: "Artémis",
            hint: "Déesse de la chasse, de la nature sauvage et de la Lune."
          },
          {
            word: "Dionysos",
            hint: "Dieu du vin, de la fête et du théâtre."
          },
          {
            mot: "Naruto",
            hint: "L’histoire d’un ninja déterminé à devenir Hokage dans son village."
          },
          {
            mot: "One Piece",
            hint: "Un équipage de pirates en quête du trésor légendaire laissé par Gol D. Roger."
          },
          {
            mot: "Dragon Ball",
            hint: "Des combattants protégeant la Terre, cherchant des boules magiques exauçant les vœux."
          },
          {
            mot: "Death Note",
            hint: "Un cahier surnaturel qui provoque la mort de ceux dont le nom y est inscrit."
          },
          {
            mot: "Sailor Moon",
            hint: "Des guerrières protégeant la Terre grâce aux pouvoirs lunaires."
          },
          {
            mot: "Fullmetal Alchemist",
            hint: "Deux frères alchimistes en quête de la pierre philosophale pour retrouver leurs corps."
          },
          {
            mot: "Bleach",
            hint: "Un lycéen obtient des pouvoirs de shinigami pour combattre les esprits maléfiques."
          },
          {
            mot: "Hunter x Hunter",
            hint: "Un jeune garçon part à l’aventure pour devenir Hunter et retrouver son père."
          },
          {
            mot: "Attack on Titan",
            hint: "Des humains luttent contre des Titans mangeurs d’hommes, enfermés derrière de hautes murailles."
          },
          {
            mot: "My Hero Academia",
            hint: "Dans un monde où presque tout le monde possède un Alter, un jeune garçon rêve de devenir un super-héros."
          },
          {
            mot: "Jujutsu Kaisen",
            hint: "Des exorcistes combattent des Fléaux, des créatures nées des émotions négatives de l’humanité."
          },
          {
            mot: "Demon Slayer",
            hint: "Un jeune garçon s’entraîne pour devenir pourfendeur de démons et sauver sa sœur."
          },
          {
            mot: "Tokyo Revengers",
            hint: "Un homme remonte le temps pour empêcher la tragique disparition de son ancienne petite amie."
          },
          {
            mot: "JoJo's Bizarre Adventure",
            hint: "Une saga familiale où chaque génération affronte des ennemis grâce à des pouvoirs spéciaux, appelés Stand."
          },
          {
            mot: "Fairy Tail",
            hint: "Les aventures d’une guilde de mages soudée et excentrique."
          },
            {
              word: "Mario",
              hint: "Célèbre plombier de Nintendo connu pour sauver la princesse Peach."
            },
            {
              word: "Zelda",
              hint: "Princesse du royaume d’Hyrule dans la célèbre série de Nintendo."
            },
            {
              word: "Link",
              hint: "Héros vêtu de vert protégeant Hyrule et la princesse Zelda."
            },
            {
              word: "Pikachu",
              hint: "Mascotte électrique jaune de la franchise Pokémon."
            },
            {
              word: "Sonic",
              hint: "Hérisson bleu ultra rapide, mascotte de Sega."
            },
            {
              word: "Master Chief",
              hint: "Super soldat et personnage principal de la série Halo."
            },
            {
              word: "Pac-Man",
              hint: "Personnage emblématique des jeux d’arcade qui mange des pac-gommes."
            },
            {
              word: "Lara Croft",
              hint: "Archéologue aventurière de la série Tomb Raider."
            },
            {
              word: "Kratos",
              hint: "Personnage principal de God of War, ancien dieu de la guerre."
            },
            {
              word: "Geralt",
              hint: "Sorceleur chasseur de monstres dans la série The Witcher."
            },
            {
              word: "Spiderman",
              hint: "Super-héros mordu par une araignée radioactive, protégeant New York."
            },
            {
              word: "Iron Man",
              hint: "Milliardaire en armure high-tech membre des Avengers."
            },
            {
              word: "Thor",
              hint: "Dieu du tonnerre dans l’univers Marvel, manie le marteau Mjolnir."
            },
            {
              word: "Hulk",
              hint: "Scientifique se transformant en géant vert sous le coup de la colère."
            },
            {
              word: "Captain America",
              hint: "Super-soldat patriote portant un bouclier en vibranium."
            },
            {
              word: "Thanos",
              hint: "Titan fou cherchant à rassembler les Pierres d’Infinité."
            },
            // ———————————— Naruto ————————————
{
    word: "Naruto Uzumaki",
    hint: "Le ninja le plus imprévisible de Konoha, déterminé à devenir Hokage."
  },
  {
    word: "Sasuke Uchiha",
    hint: "Survivant du clan Uchiha, poussé par sa soif de vengeance."
  },
  {
    word: "Sakura Haruno",
    hint: "Coéquipière de Naruto et Sasuke, experte en jutsu médical."
  },
  {
    word: "Kakashi Hatake",
    hint: "Le ninja copieur, célèbre pour son Sharingan et son masque."
  },
  {
    word: "Itachi Uchiha",
    hint: "Frère aîné de Sasuke, réputé pour le massacre de son propre clan."
  },
  {
    word: "Gaara",
    hint: "Jinchūriki du Shukaku, devenu Kazekage du village de Suna."
  },
  {
    word: "Hinata Hyuga",
    hint: "Membre timide du clan Hyūga, admiratrice de Naruto."
  },
  {
    word: "Shikamaru Nara",
    hint: "Génie tactique paresseux, capable d’utiliser les ombres."
  },
  
  {
    word: "Shinichi Izumi",
    hint: "Lycéen devenant l'hôte du parasite Migi."
  },
  {
    word: "Migi",
    hint: "Parasite occupant la main droite de Shinichi et partageant son corps."
  },
  {
    word: "Reiko Tamura",
    hint: "Parasite adoptant une apparence humaine, cherchant à comprendre l'humanité."
  },
  {
    word: "Kana Kimishima",
    hint: "Lycéenne douée d’une étrange perception des parasites."
  },
  {
    word: "Gotou",
    hint: "Parasite fusionné avec plusieurs autres, formant un ennemi redoutable."
  },
  {
    word: "Yuji Itadori",
    hint: "Le protagoniste énergique qui ingère un doigt maudit pour combattre les Fléaux."
  },
  {
    word: "Megumi Fushiguro",
    hint: "Utilisateur de shikigami capable d'invoquer des créatures surnaturelles."
  },
  {
    word: "Nobara Kugisaki",
    hint: "Ninja impétueuse et déterminée, experte dans l'usage de marteaux et clous."
  },
  {
    word: "Satoru Gojo",
    hint: "Professeur charismatique et extrêmement puissant, reconnu pour sa technique illimitée."
  },
]
