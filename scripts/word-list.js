const wordList = [
        {
          word: "guitare",
          hint: "Un instrument de musique à cordes."
        },
        {
          word: "oxygène",
          hint: "Un gaz incolore et inodore essentiel à la vie."
        },
        {
          word: "montagne",
          hint: "Une grande élévation naturelle de la surface de la Terre."
        },
        {
          word: "peinture",
          hint: "Une forme d'art utilisant des couleurs sur une surface pour créer des images ou exprimer des idées."
        },
        {
          word: "astronomie",
          hint: "L’étude scientifique des objets et phénomènes célestes."
        },
        {
          word: "football",
          hint: "Un sport populaire qui se joue avec un ballon sphérique."
        },
        {
          word: "chocolat",
          hint: "Une friandise sucrée à base de fèves de cacao."
        },
        {
          word: "papillon",
          hint: "Un insecte aux ailes colorées et au corps élancé."
        },
        {
          word: "histoire",
          hint: "L’étude des événements passés et des civilisations humaines."
        },
        {
          word: "pizza",
          hint: "Un plat savoureux composé d’une base ronde et aplatie garnie de divers ingrédients."
        },
        {
          word: "jazz",
          hint: "Un genre musical caractérisé par l’improvisation et la syncope."
        },
        {
          word: "appareil photo",
          hint: "Un dispositif utilisé pour capturer et enregistrer des images ou des vidéos."
        },
        {
          word: "diamant",
          hint: "Une pierre précieuse réputée pour son éclat et sa dureté."
        },
        {
          word: "aventure",
          hint: "Une expérience excitante ou audacieuse."
        },
        {
          word: "science",
          hint: "L’étude systématique de la structure et du comportement du monde physique et naturel."
        },
        {
          word: "bicyclette",
          hint: "Un véhicule à deux roues propulsé par la force humaine."
        },
        {
          word: "coucher de soleil",
          hint: "La disparition quotidienne du soleil sous l’horizon."
        },
        {
          word: "café",
          hint: "Une boisson caféinée populaire préparée à partir de grains de café torréfiés."
        },
        {
          word: "danse",
          hint: "Un mouvement rythmique du corps souvent exécuté sur de la musique."
        },
        {
          word: "galaxie",
          hint: "Un vaste ensemble d’étoiles, de gaz et de poussière maintenus ensemble par la gravité."
        },
        {
          word: "orchestre",
          hint: "Un grand ensemble de musiciens jouant différents instruments."
        },
        {
          word: "volcan",
          hint: "Une montagne ou colline avec un conduit par lequel la lave, la roche, la vapeur chaude et les gaz sont éjectés."
        },
        {
          word: "roman",
          hint: "Une œuvre de fiction longue, généralement dotée d’une intrigue complexe et de personnages développés."
        },
        {
          word: "sculpture",
          hint: "Une forme d’art tridimensionnelle créée en façonnant ou combinant des matériaux."
        },
        {
          word: "symphonie",
          hint: "Une longue composition musicale pour orchestre complet, généralement en plusieurs mouvements."
        },
        {
          word: "architecture",
          hint: "L’art et la science de concevoir et de construire des bâtiments."
        },
        {
          word: "ballet",
          hint: "Une forme de danse classique caractérisée par des mouvements précis et gracieux."
        },
        {
          word: "astronaute",
          hint: "Une personne formée pour voyager et travailler dans l’espace."
        },
        {
          word: "cascade",
          hint: "Une chute d’eau tombant d’une certaine hauteur."
        },
        {
          word: "technologie",
          hint: "L’application des connaissances scientifiques à des fins pratiques."
        },
        {
          word: "arc-en-ciel",
          hint: "Un phénomène météorologique causé par la réflexion, la réfraction et la dispersion de la lumière."
        },
        {
          word: "univers",
          hint: "L’ensemble de toute la matière, de l’espace et du temps existants."
        },
        {
          word: "piano",
          hint: "Un instrument de musique joué en appuyant sur des touches qui actionnent des marteaux frappant des cordes."
        },
        {
          word: "vacances",
          hint: "Une période consacrée au plaisir, au repos ou à la détente."
        },
        {
          word: "forêt tropicale",
          hint: "Une forêt dense caractérisée par de fortes précipitations et une grande biodiversité."
        },
        {
          word: "théâtre",
          hint: "Un lieu où sont présentées des pièces, des films ou d’autres spectacles."
        },
        {
          word: "téléphone",
          hint: "Un appareil utilisé pour transmettre le son sur de longues distances."
        },
        {
          word: "langue",
          hint: "Un système de communication composé de words, de gestes et de syntaxe."
        },
        {
          word: "désert",
          hint: "Une terre stérile ou aride avec peu ou pas de précipitations."
        },
        {
          word: "tournesol",
          hint: "Une plante haute dont la fleur jaune est large."
        },
        {
          word: "fantastique",
          hint: "Un genre de fiction imaginative impliquant la magie et des éléments surnaturels."
        },
        {
          word: "télescope",
          hint: "Un instrument optique utilisé pour observer des objets lointains dans l’espace."
        },
        {
          word: "brise",
          hint: "Un vent léger."
        },
        {
          word: "oasis",
          hint: "Un endroit fertile dans un désert où l’on trouve de l’eau."
        },
        {
          word: "photographie",
          hint: "L’art ou la pratique de créer des images en enregistrant la lumière ou d’autres rayonnements."
        },
        {
          word: "safari",
          hint: "Une expédition ou un voyage, généralement pour observer la faune dans son habitat naturel."
        },
        {
          word: "planète",
          hint: "Un corps céleste qui orbite autour d’une étoile et ne produit pas sa propre lumière."
        },
        {
          word: "rivière",
          hint: "Un large cours d’eau qui s’écoule vers la mer, un lac ou un autre cours d’eau."
        },
        {
          word: "tropical",
          hint: "Qui se rapporte à la région située entre le Tropique du Cancer et le Tropique du Capricorne."
        },
        {
          word: "mystérieux",
          hint: "Difficile ou impossible à comprendre, à expliquer ou à identifier."
        },
        {
          word: "énigme",
          hint: "Quelque chose de mystérieux, déconcertant ou difficile à comprendre."
        },
        {
          word: "paradoxe",
          hint: "Une affirmation ou situation qui se contredit ou défie l’intuition."
        },
        {
          word: "casse-tête",
          hint: "Un jeu ou problème conçu pour tester l’ingéniosité ou les connaissances."
        },
        {
          word: "chuchoter",
          hint: "Parler très doucement ou à voix basse, souvent de manière secrète."
        },
        {
          word: "ombre",
          hint: "Une zone sombre produite par un objet qui bloque la lumière."
        },
        {
          word: "secret",
          hint: "Quelque chose gardé caché ou inconnu des autres."
        },
        {
          word: "curiosité",
          hint: "Un fort désir de savoir ou d’apprendre quelque chose."
        },
        {
          word: "imprévisible",
          hint: "Qu’on ne peut prévoir ou connaître à l’avance ; incertain."
        },
        {
          word: "embrouiller",
          hint: "Rendre quelqu’un confus ou perplexe ; rendre quelque chose peu clair ou difficile à comprendre."
        },
        {
          word: "dévoiler",
          hint: "Révéler ou rendre public quelque chose qui était auparavant secret ou inconnu."
        },
        {
          word: "illusion",
          hint: "Une perception ou croyance fausse ; une apparence ou impression trompeuse."
        },
        {
          word: "clair de lune",
          hint: "La lumière de la lune."
        },
        {
          word: "vibrant",
          hint: "Plein d’énergie, de luminosité et de vie."
        },
        {
          word: "nostalgie",
          hint: "Un désir sentimental ou une affection mélancolique pour le passé."
        },
        {
          word: "brillant",
          hint: "Exceptionnellement intelligent, talentueux ou impressionnant."
        },
        {
            word: "littérature",
            hint: "L'art de l'écrit, incluant la prose et la poésie."
          },
          {
            word: "poésie",
            hint: "Une forme d'expression littéraire privilégiant le rythme et l'image."
          },
          {
            word: "musique",
            hint: "L'art de combiner des sons et des silences de manière harmonieuse ou expressive."
          },
          {
            word: "ordinateur",
            hint: "Un dispositif électronique capable de traiter et de stocker des informations."
          },
          {
            word: "amitié",
            hint: "Un sentiment d’affection ou de sympathie réciproque entre deux personnes."
          },
          {
            word: "maison",
            hint: "Un bâtiment servant de lieu d’habitation."
          },
          {
            word: "rêve",
            hint: "Une suite d’images et de sensations se produisant pendant le sommeil."
          },
          {
            word: "chimie",
            hint: "La science qui étudie la composition, la structure et les propriétés de la matière."
          },
          {
            word: "électricité",
            hint: "Une forme d'énergie liée au mouvement ou à la présence de charges électriques."
          },
          {
            word: "horloge",
            hint: "Un instrument destiné à mesurer et à indiquer l'heure."
          },
          {
            word: "automne",
            hint: "La saison qui suit l’été et précède l’hiver, marquée par la chute des feuilles."
          },
          {
            word: "étoile",
            hint: "Un corps céleste qui brille par sa propre lumière, comme le Soleil."
          },
          {
            word: "satellite",
            hint: "Un objet naturel ou artificiel en orbite autour d’une planète."
          },
          {
            word: "comète",
            hint: "Un petit corps céleste constitué de glace et de poussière, laissant parfois une traînée lumineuse dans le ciel."
          },
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
      ]
