


export const SECTION_1_DATA = [
  {
    unitId: "1",
    unitTitle: "The Drinks",
    levels: [
    
 
  {
    levelId: "1",
    title: "The Drinks: The Master Foundation",
    questions: [
      // --- CONCEPT 1: PRIMARY NOUNS ---
      { type: "intro", word: "der Kaffee", translation: "The Coffee", content: "Masculine nouns use 'der'. Coffee is 'der Kaffee'." },
      { type: "choice", q: "Which one is 'The Coffee'?", options: ["die Kaffee", "der Kaffee", "das Kaffee"], a: "der Kaffee" },
      { type: "intro", word: "das Wasser", translation: "The Water", content: "Neuter nouns use 'das'. Water is 'das Wasser'." },
      { type: "choice", q: "Which one is 'The Water'?", options: ["der Wasser", "die Wasser", "das Wasser"], a: "das Wasser" },

      // --- CONCEPT 2: THE CONNECTOR "UND" ---
      { type: "intro", word: "und", translation: "and", content: "'und' means and in English." },
      { type: "jumble", q: "The coffee and the water", options: ["Wasser", "das", "und", "Kaffee", "der"], a: "der Kaffee und das Wasser" },
      { type: "jumble", q: "Water and coffee", options: ["Kaffee", "und", "Wasser"], a: "Wasser und Kaffee" },

      // --- CONCEPT 3: THE VERB "IST" ---
      { type: "intro", word: "ist", translation: "is", content: "'ist' links your subject to a description." },
      { type: "intro", word: "kalt", translation: "cold", content: "'kalt' is an adjective. It usually comes after 'ist'." },
      { type: "jumble", q: "The water is cold", options: ["Wasser", "kalt", "das", "ist"], a: "das Wasser ist kalt" },
      { type: "choice", q: "How do you say 'The coffee is cold'?", options: ["Der Kaffee ist kalt", "Das Kaffee ist kalt", "Kaffee ist der kalt"], a: "Der Kaffee ist kalt" },

      // --- CONCEPT 4: FEMININE & NEW ADJECTIVE ---
      { type: "intro", word: "die Milch", translation: "The Milk", content: "Feminine nouns use 'die'. Milch ends with a soft 'ch' sound." },
      { type: "intro", word: "heiß", translation: "hot", content: "Notice the 'ß' – it sounds like 'ss'. 'heiß' means hot." },
      { type: "jumble", q: "The milk is hot", options: ["Milch", "heiß", "die", "ist"], a: "die Milch ist heiß" },
      { type: "jumble", q: "The milk and the coffee", options: ["Kaffee", "der", "Milch", "und", "die"], a: "die Milch und der Kaffee" },

      // --- CONCEPT 5: NEGATION ---
      { type: "intro", word: "nicht", translation: "not", content: "To say 'is not', use 'ist nicht'." },
      { type: "jumble", q: "The coffee is not cold", options: ["der", "nicht", "Kaffee", "kalt", "ist"], a: "der Kaffee ist nicht kalt" },
      { type: "jumble", q: "The milk is not hot", options: ["ist", "heiß", "die", "Milch", "nicht"], a: "die Milch ist nicht heiß" },
      { type: "choice", q: "What does 'nicht' mean?", options: ["and", "is", "not"], a: "not" },

      // --- CONCEPT 6: QUESTIONS ---
      { type: "intro", title: "Questions", content: "Swap 'ist' and the 'noun' to ask a question. 'Ist das...?'" },
      { type: "jumble", q: "Is the water cold?", options: ["Wasser", "Ist", "das", "kalt"], a: "Ist das Wasser kalt" },
      { type: "jumble", q: "Is the milk hot?", options: ["die", "heiß", "Milch", "Ist"], a: "Ist die Milch heiß" },

      // --- CONCEPT 7: FINAL RECAP & BOSS ---
      { type: "boss", q: "The coffee is hot and the milk is cold.", options: ["Der Kaffee ist heiß und die Milch ist kalt", "Das Kaffee ist heiß und der Milch ist kalt"], a: "Der Kaffee ist heiß und die Milch ist kalt" },
      { type: "boss", q: "Is the coffee cold?", options: ["Ist der Kaffee kalt?", "Der Kaffee ist kalt?", "Kalt ist der Kaffee?"], a: "Ist der Kaffee kalt?" },
      { type: "boss", q: "The water is not hot, it is cold.", options: ["Das Wasser ist nicht heiß, es ist kalt", "Das Wasser nicht ist heiß, es ist kalt"], a: "Das Wasser ist nicht heiß, es ist kalt" }
    ]
  },
  {
    levelId: "2",
    title: "I would like...",
    questions: [
      // --- CONCEPT 1: THE PRONOUN "ICH" (I) ---
      { type: "intro", word: "Ich", translation: "I", content: "In German, 'Ich' means 'I'. It's the starting point for every order you'll make." },
      { type: "choice", q: "How do you say 'I'?", options: ["Du", "Ich", "Er"], a: "Ich" },
      { type: "choice", q: "Which word means 'I'?", options: ["und", "ist", "Ich"], a: "Ich" },

      // --- CONCEPT 2: THE VERB "MÖCHTE" (WOULD LIKE) ---
      { type: "intro", word: "möchte", translation: "would like", content: "This is the polite way to order. 'Ich möchte' means 'I would like'." },
      { type: "choice", q: "How do you say 'would like'?", options: ["ist", "möchte", "kalt"], a: "möchte" },
      { type: "jumble", q: "I would like coffee", options: ["möchte", "Ich", "Kaffee"], a: "Ich möchte Kaffee" },
      { type: "jumble", q: "I would like water", options: ["Wasser", "Ich", "möchte"], a: "Ich möchte wasser" },

      // --- CONCEPT 3: THE ACCUSATIVE "DEN" (THE BIG CHANGE) ---
      { type: "intro", word: "den Kaffee", translation: "the coffee (as an object)", content: "Grammar Alert! When you want 'the' coffee, 'der' changes to 'den'. This only happens to Masculine words!" },
      { type: "choice", q: "When ordering 'the coffee', use...", options: ["der Kaffee", "den Kaffee", "das Kaffee"], a: "den Kaffee" },
      { type: "jumble", q: "I would like the coffee", options: ["Kaffee", "möchte", "den", "Ich"], a: "Ich möchte den Kaffee" },

      // --- CONCEPT 4: NO CHANGE FOR NEUTER/FEMININE ---
      { type: "intro", title: "No Changes Here", content: "Good news! 'das Wasser' and 'die Milch' stay exactly the same when you order them." },
      { type: "jumble", q: "I would like the water", options: ["möchte", "das", "Ich", "Wasser"], a: "Ich möchte das Wasser" },
      { type: "jumble", q: "I would like the milk", options: ["Milch", "Ich", "die", "möchte"], a: "Ich möchte die Milch" },
      { type: "choice", q: "Which article stays the same when ordering?", options: ["der", "die", "none"], a: "die" },

      // --- CONCEPT 5: POLITENESS (BITTE & DANKE) ---
      { type: "intro", word: "bitte", translation: "please", content: "Always add 'bitte' to the end of your sentence to be a polite guest." },
      { type: "intro", word: "danke", translation: "thanks", content: "Use 'danke' when the waiter brings your drink." },
      { type: "jumble", q: "I would like the milk, please", options: ["Milch", "die", "Ich", "bitte", "möchte"], a: "Ich möchte die Milch bitte" },
      { type: "jumble", q: "The tea, please", options: ["Tee", "der", "bitte"], a: "der Tee bitte" },
      { type: "choice", q: "Which word means 'please'?", options: ["danke", "bitte", "und"], a: "bitte" },

      // --- CONCEPT 6: COMBINING EVERYTHING ---
      { type: "jumble", q: "I would like the water and the coffee", options: ["Kaffee", "und", "möchte", "das", "den", "Wasser", "Ich"], a: "Ich möchte das Wasser und den Kaffee" },
      { type: "jumble", q: "I would like the milk, thanks", options: ["möchte", "Milch", "Ich", "danke", "die"], a: "Ich möchte die Milch danke" },
      { type: "choice", q: "Translate: 'Ich möchte den Kaffee.'", options: ["I would like the coffee", "The coffee is hot", "I am the coffee"], a: "I would like the coffee" },

      // --- CONCEPT 7: QUESTIONS & BOSS (FINAL STEPS) ---
      { type: "intro", title: "Ordering as a Question", content: "You can also say 'Möchte ich...?' though it's less common than the statement." },
      { type: "jumble", q: "I would like the tea, please", options: ["Ich", "bitte", "möchte", "den", "Tee"], a: "Ich möchte den Tee bitte" },
      { type: "boss", q: "Translate: I would like the coffee and the water, please.", options: ["Ich möchte den Kaffee und das Wasser, bitte", "Ich möchte der Kaffee und das Wasser, bitte"], a: "Ich möchte den Kaffee und das Wasser, bitte" },
      { type: "boss", q: "Which is correct?", options: ["Ich möchte das Milch", "Ich möchte die Milch", "Ich möchte den Milch"], a: "Ich möchte die Milch" },
      { type: "jumble", q: "Final Jumble: I would like the tea, the milk, and the water", options: ["den", "Wasser", "Milch", "und", "Ich", "die", "das", "Tee", "möchte"], a: "Ich möchte den Tee die Milch und das Wasser" },
      { type: "boss", q: "Final Check: How do you say 'The coffee' when it is the object?", options: ["der Kaffee", "den Kaffee", "das Kaffee"], a: "den Kaffee" }
    ]
  },
  {
    levelId: "3",
    title: "Being Polite",
    questions: [
      // --- CONCEPT 1: FORMAL GREETING ---
      { type: "intro", word: "Guten Tag", translation: "Good day", content: "This is the standard formal greeting in Germany. Use it when entering a café." },
      { type: "choice", q: "How do you say 'Good day'?", options: ["Guten Tag", "Hallo Tag", "Guten Wasser"], a: "Guten Tag" },
      { type: "jumble", q: "Good day, the coffee please", options: ["Tag", "bitte", "Kaffee", "Guten", "der"], a: "Guten Tag der Kaffee bitte" },

      // --- CONCEPT 2: GETTING ATTENTION ---
      { type: "intro", word: "Entschuldigung", translation: "Excuse me", content: "Use this long word to get a waiter's attention politely." },
      { type: "choice", q: "Which word means 'Excuse me'?", options: ["Danke", "Entschuldigung", "Bitte"], a: "Entschuldigung" },
      { type: "jumble", q: "Excuse me, the water please", options: ["Wasser", "bitte", "das", "Entschuldigung"], a: "Entschuldigung das Wasser bitte" },

      // --- CONCEPT 3: THE FORMAL \"YOU\" ---
      { type: "intro", word: "Sie", translation: "You (formal)", content: "In a café, you use 'Sie' for adults you don't know. It is always capitalized." },
      { type: "choice", q: "What does 'Sie' mean in a formal setting?", options: ["I", "You", "He"], a: "You" },

      // --- CONCEPT 4: THE VERB \"HABEN\" ---
      { type: "intro", word: "haben", translation: "have", content: "To check if the café has something, use the verb 'haben'." },
      { type: "choice", q: "Which word means 'have'?", options: ["ist", "haben", "nicht"], a: "haben" },
      { type: "jumble", q: "You have the coffee", options: ["Sie", "den", "haben", "Kaffee"], a: "Sie haben den Kaffee" },

      // --- CONCEPT 5: ASKING THE QUESTION ---
      { type: "intro", title: "Asking 'Do you have?'", content: "To ask a question, put the verb first: 'Haben Sie...?' means 'Do you have...?'" },
      { type: "jumble", q: "Do you have tea?", options: ["Haben", "Tee", "Sie"], a: "Haben Sie Tee" },
      { type: "jumble", q: "Excuse me, do you have milk?", options: ["Sie", "Milch", "Entschuldigung", "Haben"], a: "Entschuldigung Haben Sie Milch" },

      // --- CONCEPT 6: COMPLIMENTING ---
      { type: "intro", word: "lecker", translation: "delicious", content: "Use this to tell the waiter the drink is good." },
      { type: "intro", word: "sehr", translation: "very", content: "'sehr' makes an adjective stronger. 'Sehr lecker' = 'Very delicious'." },
      { type: "jumble", q: "The milk is very delicious", options: ["die", "ist", "sehr", "Milch", "lecker"], a: "die Milch ist sehr lecker" },
      { type: "choice", q: "Translate: 'sehr lecker'", options: ["very hot", "very cold", "very delicious"], a: "very delicious" },

      // --- CONCEPT 7: RESPONDING ---
      { type: "intro", word: "Gerne", translation: "Gladly / With pleasure", content: "A waiter says 'Gerne' when they are happy to serve you. It's like 'You're welcome'." },
      { type: "jumble", q: "Yes, gladly", options: ["Ja", "Gerne"], a: "Ja Gerne" },

      // --- MIXED RECAP & COMPLEX SENTENCES ---
      { type: "jumble", q: "Do you have the water and the tea?", options: ["Haben", "Wasser", "und", "das", "den", "Tee", "Sie"], a: "Haben Sie das Wasser und den Tee" },
      { type: "choice", q: "What is 'The tea' when it's an object?", options: ["der Tee", "den Tee", "das Tee"], a: "den Tee" },
      { type: "jumble", q: "Good day, I would like the coffee", options: ["Tag", "den", "möchte", "Kaffee", "Ich", "Guten"], a: "Guten Tag Ich möchte den Kaffee" },

      // --- FINAL BOSS CHALLENGES ---
      { type: "boss", q: "Translate: Excuse me, do you have water?", options: ["Entschuldigung, haben Sie Wasser?", "Entschuldigung, ist das Wasser?"], a: "Entschuldigung, haben Sie Wasser?" },
      { type: "boss", q: "Translate: Good day, the milk is very delicious.", options: ["Guten Tag, die Milch ist sehr lecker", "Hallo, das Milch ist sehr lecker"], a: "Guten Tag, die Milch ist sehr lecker" },
      { type: "jumble", q: "Final Jumble: Excuse me, do you have the coffee please", options: ["Haben", "Entschuldigung", "Kaffee", "den", "Sie", "bitte"], a: "Entschuldigung Haben Sie den Kaffee bitte" },
      { type: "boss", q: "Translate: I would like the tea, thank you.", options: ["Ich möchte den Tee, danke", "Ich möchte der Tee, bitte"], a: "Ich möchte den Tee, danke" },
      { type: "boss", q: "Final Test: Which is the formal way to say 'You'?", options: ["du", "den", "Sie"], a: "Sie" }
    ]
  },
  {
    levelId: "4",
    title: "Foods and Snacks",
    questions: [
      // --- CONCEPT 1: NEW MASCULINE FOOD ---
      { type: "intro", word: "der Kuchen", translation: "The Cake", content: "Cake is Masculine. Remember: 'der' changes to 'den' if you order it!" },
      { type: "choice", q: "How do you say 'The Cake'?", options: ["das Kuchen", "die Kuchen", "der Kuchen"], a: "der Kuchen" },
      { type: "jumble", q: "The cake is delicious", options: ["ist", "Kuchen", "lecker", "der"], a: "der Kuchen ist lecker" },

      // --- CONCEPT 2: NEW NEUTER FOOD ---
      { type: "intro", word: "das Brot", translation: "The Bread", content: "Bread is Neuter: 'das Brot'. Neuter words don't change when you order them." },
      { type: "choice", q: "Which one is 'The Bread'?", options: ["der Brot", "das Brot", "die Brot"], a: "das Brot" },
      { type: "jumble", q: "The bread is hot", options: ["Brot", "das", "ist", "heiß"], a: "das Brot ist heiß" },

      // --- CONCEPT 3: ORDERING FOOD (ACCUSATIVE) ---
      { type: "jumble", q: "I would like the cake", options: ["Kuchen", "Ich", "den", "möchte"], a: "Ich möchte den Kuchen" },
      { type: "choice", q: "Why did we use 'den' for cake?", options: ["It is an object", "It is feminine", "It is plural"], a: "It is an object" },
      { type: "jumble", q: "I would like the bread", options: ["möchte", "das", "Brot", "Ich"], a: "Ich möchte das Brot" },

      // --- CONCEPT 4: ANOTHER NEUTER FOOD ---
      { type: "intro", word: "das Sandwich", translation: "The Sandwich", content: "German often borrows words from English. It is Neuter: 'das Sandwich'." },
      { type: "choice", q: "What is 'The Sandwich'?", options: ["der Sandwich", "das Sandwich"], a: "das Sandwich" },
      { type: "jumble", q: "The sandwich is very cold", options: ["Sandwich", "ist", "kalt", "das", "sehr"], a: "das Sandwich ist sehr kalt" },

      // --- CONCEPT 5: EXPRESSING HUNGER ---
      { type: "intro", word: "Hunger", translation: "Hunger", content: "In German, you don't 'are' hungry, you 'have' hunger." },
      { type: "jumble", q: "I have hunger (I am hungry)", options: ["habe", "Hunger", "Ich"], a: "Ich habe Hunger" },
      { type: "choice", q: "How do you say 'I am hungry' in German?", options: ["Ich bin Hunger", "Ich habe Hunger"], a: "Ich habe Hunger" },

      // --- CONCEPT 6: COMBINING DRINKS AND FOOD ---
      { type: "jumble", q: "The cake and the coffee", options: ["Kaffee", "der", "und", "der", "Kuchen"], a: "der Kuchen und der Kaffee" },
      { type: "jumble", q: "I would like the sandwich and the water", options: ["und", "das", "Sandwich", "möchte", "Ich", "das", "Wasser"], a: "Ich möchte das Sandwich und das Wasser" },
      { type: "choice", q: "Recall: What is 'The Milk'?", options: ["der Milch", "die Milch", "das Milch"], a: "die Milch" },

      // --- CONCEPT 7: QUESTIONS ABOUT FOOD ---
      { type: "jumble", q: "Do you have cake?", options: ["Sie", "Haben", "Kuchen"], a: "Haben Sie Kuchen" },
      { type: "jumble", q: "Is the bread delicious?", options: ["das", "Ist", "Brot", "lecker"], a: "Ist das Brot lecker" },

      // --- MIXED REINFORCEMENT ---
      { type: "jumble", q: "Excuse me, I would like the cake please", options: ["möchte", "Kuchen", "den", "Entschuldigung", "bitte", "Ich"], a: "Entschuldigung Ich möchte den Kuchen bitte" },
      { type: "choice", q: "Translate: 'sehr lecker'", options: ["very hot", "very cold", "very delicious"], a: "very delicious" },

      // --- FINAL BOSS CHALLENGES ---
      { type: "boss", q: "Translate: I would like the sandwich, please.", options: ["Ich möchte das Sandwich, bitte", "Ich möchte den Sandwich, bitte"], a: "Ich möchte das Sandwich, bitte" },
      { type: "boss", q: "Translate: Do you have the cake?", options: ["Haben Sie den Kuchen?", "Haben Sie der Kuchen?"], a: "Haben Sie den Kuchen?" },
      { type: "jumble", q: "Final Jumble: The bread is very delicious and the coffee is hot", options: ["Kaffee", "Brot", "das", "und", "ist", "ist", "sehr", "heiß", "lecker", "der"], a: "das Brot ist sehr lecker und der Kaffee ist heiß" },
      { type: "boss", q: "Translate: I am hungry (I have hunger).", options: ["Ich habe Hunger", "Ich bin Hunger"], a: "Ich habe Hunger" },
      { type: "boss", q: "Final Check: 'The cake' as an object is...", options: ["der Kuchen", "den Kuchen", "das Kuchen"], a: "den Kuchen" }
    ]
  },
  {
    levelId: "5",
    title: "Final Order",
    questions: [
      // --- CONCEPT 1: ARRIVING & THE TABLE ---
      { type: "intro", word: "der Tisch", translation: "The Table", content: "To start your visit, find a table. 'Tisch' is Masculine (der)." },
      { type: "intro", word: "frei", translation: "free / available", content: "Use 'frei' to see if a table or seat is open for you." },
      { type: "jumble", q: "Is the table free?", options: ["frei", "der", "Tisch", "Ist"], a: "Ist der Tisch frei" },
      { type: "jumble", q: "The table is free and I would like coffee", options: ["Tisch", "frei", "und", "der", "Ich", "ist", "möchte", "Kaffee"], a: "der Tisch ist frei und Ich möchte Kaffee" },

      // --- CONCEPT 2: THE MENU ---
      { type: "intro", word: "die Karte", translation: "The Menu", content: "Ask for 'die Karte' to see the food and drink options." },
      { type: "jumble", q: "Excuse me, do you have the menu?", options: ["Haben", "Karte", "Entschuldigung", "die", "Sie"], a: "Entschuldigung Haben Sie die Karte" },
      { type: "jumble", q: "I would like the menu and the water", options: ["Karte", "das", "und", "die", "Ich", "Wasser", "möchte"], a: "Ich möchte die Karte und das Wasser" },

      // --- CONCEPT 3: THE BILL ---
      { type: "intro", word: "die Rechnung", translation: "The Bill", content: "When you are finished eating and drinking, ask for 'die Rechnung'." },
      { type: "jumble", q: "The cake is delicious, the bill please", options: ["Rechnung", "lecker", "ist", "die", "bitte", "Kuchen", "der"], a: "der Kuchen ist lecker die Rechnung bitte" },
      { type: "choice", q: "Which word means 'The Bill'?", options: ["der Rechnung", "die Rechnung", "das Rechnung"], a: "die Rechnung" },

      // --- CONCEPT 4: TO PAY ---
      { type: "intro", word: "zahlen", translation: "to pay", content: "Use the verb 'zahlen' when you are ready to settle the bill." },
      { type: "jumble", q: "I would like to pay the bill", options: ["Rechnung", "Ich", "zahlen", "die", "möchte"], a: "Ich möchte die Rechnung zahlen" },
      { type: "jumble", q: "Good day, I would like to pay", options: ["Ich", "Guten", "zahlen", "Tag", "möchte"], a: "Guten Tag Ich möchte zahlen" },

      // --- CONCEPT 5: TOGETHER OR SEPARATE ---
      { type: "intro", word: "zusammen", translation: "together", content: "Pay 'zusammen' if one person is paying for the whole group." },
      { type: "intro", word: "getrennt", translation: "separately", content: "Pay 'getrennt' if everyone is paying for their own items." },
      { type: "jumble", q: "Together please, and the coffee is delicious", options: ["zusammen", "lecker", "Kaffee", "und", "bitte", "der", "ist"], a: "zusammen bitte und der Kaffee ist lecker" },
      { type: "choice", q: "What do you say if you pay ONLY for your sandwich?", options: ["zusammen", "getrennt"], a: "getrennt" },
      { type: "jumble", q: "Separately please, thank you", options: ["bitte", "danke", "getrennt"], a: "getrennt bitte danke" },

      // --- CONCEPT 6: FULL SCENARIOS ---
      { type: "jumble", q: "Do you have a table and the menu please?", options: ["Haben", "einen", "Karte", "und", "Tisch", "Sie", "die", "bitte"], a: "Haben Sie einen Tisch und die Karte bitte" },
      { type: "jumble", q: "The milk is hot and the tea is very delicious", options: ["lecker", "die", "ist", "Tee", "ist", "und", "sehr", "heiß", "der", "Milch"], a: "die Milch ist heiß und der Tee ist sehr lecker" },
      { type: "jumble", q: "I would like the bread and the water please", options: ["Wasser", "das", "und", "das", "möchte", "Ich", "Brot", "bitte"], a: "Ich möchte das bread and das water bitte" },

      // --- FINAL BOSS: THE FULL EXPERIENCE ---
      { type: "boss", q: "Translate: 'Is the table free? I would like the menu.'", options: ["Ist der Tisch frei? Ich möchte die Karte.", "Ist das Tisch frei? Ich möchte den Karte."], a: "Ist der Tisch frei? Ich möchte die Karte." },
      { type: "boss", q: "Translate: 'I would like to pay separately, please.'", options: ["Ich möchte getrennt zahlen, bitte", "Ich möchte zusammen zahlen, bitte"], a: "Ich möchte getrennt zahlen, bitte" },
      { type: "jumble", q: "Final Order: I would like the coffee, the cake, and the bill please", options: ["Rechnung", "den", "Kaffee", "die", "Kuchen", "den", "und", "bitte", "möchte", "Ich"], a: "Ich möchte den Kaffee den Kuchen und die Rechnung bitte" },
      { type: "boss", q: "How do you tell the waiter 'The sandwich is very delicious'?", options: ["Das Sandwich ist sehr lecker", "Das Sandwich ist sehr kalt"], a: "Das Sandwich ist sehr lecker" },
      { type: "boss", q: "Final Test: You want to pay for yourself and your friend at once. You say:", options: ["Zusammen bitte", "Getrennt bitte"], a: "Zusammen bitte" }
    ]
  }
]
    
  },
  // src/data/section-1.js

  // ... Unit 1 (The Drinks) stays above this ...
  // src/data/section-1.js
// src/data/section-1.js
// src/data/section-1.js
{
  unitId: "2",
  unitTitle: "Describe Your Family",
  levels: [
    {
      levelId: "1",
      title: "Core Family Vocab",
      questions: [
        // --- STEP 1: THE PARENTS (NOUNS) ---
        { type: "intro", word: "Vater & Mutter", translation: "Father & Mother", content: "Family follows gender: 'der Vater' (Masculine) and 'die Mutter' (Feminine)." },
        { type: "jumble", q: "The mother and the father", options: ["die", "der", "und", "Vater", "Mutter"], a: "die Mutter und der Vater" },

        // --- STEP 2: POSSESSION (MEIN / MEINE) ---
        { type: "intro", word: "mein / meine", translation: "my", content: "Add an 'e' for feminine: 'meine Mutter'. Keep it short for masculine: 'mein Vater'." },
        
        { type: "choice", q: "How do you say 'My father'?", options: ["mein Vater", "meine Vater"], a: "mein Vater" },
        { type: "jumble", q: "My mother and my father", options: ["mein", "meine", "und", "Mutter", "Vater"], a: "mein Vater und meine Mutter" },

        // --- STEP 3: SIBLINGS ---
        { type: "intro", word: "Bruder & Schwester", translation: "Brother & Sister", content: "Pattern check: 'der Bruder' (M) and 'die Schwester' (F)." },
        { type: "jumble", q: "My brother and my sister", options: ["mein", "meine", "und", "Schwester", "Bruder"], a: "mein Bruder und meine Schwester" },
        { type: "choice", q: "Which one is 'My sister'?", options: ["meine Schwester", "mein Schwester"], a: "meine Schwester" },

        // --- STEP 4: PLURAL VERB (SIND) ---
        { type: "intro", word: "sind", translation: "are", content: "When talking about more than one person, use 'sind' instead of 'ist'." },
        { type: "choice", q: "Which word means 'are'?", options: ["ist", "sind", "und"], a: "sind" },
        { type: "jumble", q: "The mother and father are here", options: ["hier", "sind", "Vater", "der", "und", "Mutter", "die"], a: "die Mutter und der Vater sind hier" },

        // --- STEP 5: PERSONALITY (NETT) ---
        { type: "intro", word: "nett", translation: "nice", content: "A simple description for people. Use it with 'ist' or 'sind'." },
        { type: "jumble", q: "My brother is nice", options: ["nett", "ist", "mein", "Bruder"], a: "mein Bruder ist nett" },
        { type: "jumble", q: "My mother and father are nice", options: ["nett", "sind", "Vater", "mein", "und", "Mutter", "meine"], a: "meine Mutter und mein Vater sind nett" },

        // --- STEP 6: AGE (JUNG / ALT) ---
        { type: "intro", word: "jung / alt", translation: "young / old", content: "Let's describe ages. 'jung' (young) and 'alt' (old)." },
        { type: "jumble", q: "My sister is young", options: ["jung", "ist", "meine", "Schwester"], a: "meine Schwester ist jung" },
        { type: "jumble", q: "My brother and sister are young", options: ["jung", "sind", "Schwester", "meine", "und", "Bruder", "mein"], a: "mein Bruder und meine Schwester sind jung" },

        // --- STEP 7: PROGRESSIVE MIXING ---
        { type: "jumble", q: "My father is not old", options: ["alt", "nicht", "ist", "mein", "Vater"], a: "mein Vater ist nicht alt" },
        { type: "choice", q: "Which sentence uses 'sind' correctly?", options: ["Mein Bruder sind nett", "Meine Mutter und mein Vater sind nett"], a: "Meine Mutter und mein Vater sind nett" },
        { type: "jumble", q: "My sister is nice and my brother is young", options: ["jung", "ist", "Bruder", "mein", "und", "nett", "ist", "Schwester", "meine"], a: "meine Schwester ist nett und mein Bruder ist jung" },

        // --- FINAL BOSS CHALLENGES ---
        { type: "boss", q: "Translate: 'My father and my mother are nice.'", options: ["Mein Vater und meine Mutter sind nett", "Meine Vater und mein Mutter ist nett"], a: "Mein Vater und meine Mutter sind nett" },
        { type: "jumble", q: "My brother is young and my sister is nice", options: ["nett", "ist", "Schwester", "meine", "und", "jung", "ist", "Bruder", "mein"], a: "mein Bruder ist jung und meine Schwester ist nett" },
        { type: "boss", q: "Final Check: 'My sister is young.'", options: ["Meine Schwester ist jung", "Mein Schwester ist jung"], a: "Meine Schwester ist jung" },
        { type: "jumble", q: "The mother and the sister are not old", options: ["alt", "nicht", "sind", "Schwester", "die", "und", "Mutter", "die"], a: "die Mutter und die Schwester sind nicht alt" },
        { type: "boss", q: "Which word means 'are'?", options: ["ist", "sind", "und"], a: "sind" }
      ]
    },// src/data/section-1.js (Unit 2, Level 2)
// src/data/section-1.js (Unit 2, Level 2)
// src/data/section-1.js (Unit 2, Level 2)
{
  levelId: "2",
  title: "Possessive Pronouns (Mein/Dein)",
  questions: [
    // --- STEP 1: INTRODUCING DEIN (MASCULINE) ---
    { type: "intro", word: "dein", translation: "your (masculine)", content: "To talk about someone else's family, use 'dein' for masculine members like Vater." },
    { type: "choice", q: "How do you say 'Your father'?", options: ["deine Vater", "dein Vater"], a: "dein Vater" },
    { type: "jumble", q: "Your brother is young", options: ["jung", "ist", "dein", "Bruder"], a: "dein Bruder ist jung" },

    // --- STEP 2: INTRODUCING DEINE (FEMININE) ---
    { type: "intro", word: "deine", translation: "your (feminine)", content: "Use 'deine' for feminine family members. It follows the same 'e' pattern as 'meine'." },
    
    { type: "choice", q: "How do you say 'Your sister'?", options: ["dein Schwester", "deine Schwester"], a: "deine Schwester" },
    { type: "jumble", q: "Your mother is nice", options: ["nett", "ist", "deine", "Mutter"], a: "deine Mutter ist nett" },

    // --- STEP 3: NEW MASCULINE MEMBER (OPA) ---
    { type: "intro", word: "der Opa", translation: "The Grandfather", content: "Grandfather is 'der Opa'. It is masculine." },
    { type: "choice", q: "Which is correct?", options: ["dein Opa", "deine Opa"], a: "dein Opa" },
    { type: "jumble", q: "My opa and your opa", options: ["dein", "Opa", "und", "mein", "Opa"], a: "mein Opa und dein Opa" },

    // --- STEP 4: NEW FEMININE MEMBER (OMA) ---
    { type: "intro", word: "die Oma", translation: "The Grandmother", content: "Grandmother is 'die Oma'. It is feminine." },
    { type: "choice", q: "Which is correct?", options: ["mein Oma", "meine Oma"], a: "meine Oma" },
    { type: "jumble", q: "Your Grandmother is very nice", options: ["nett", "sehr", "ist", "deine", "Oma"], a: "deine Oma ist sehr nett" },

    // --- STEP 5: PROGRESSIVE MIXING (BUILDING SENTENCES) ---
    { type: "jumble", q: "My brother and your brother are young", options: ["jung", "sind", "Bruder", "dein", "und", "Bruder", "mein"], a: "mein Bruder und dein Bruder sind jung" },
    {type : "intro", word: "aber", translation: "but", content: "Use 'aber' to contrast two statements."},
    { type: "jumble", q: "Your sister is nice but my sister is old", options: ["alt", "ist", "Schwester", "meine", "aber", "nett", "ist", "Schwester", "deine"], a: "deine Schwester ist nett aber meine Schwester ist alt" },

    // --- STEP 6: COMPLEX COMBINATIONS ---
    { type: "jumble", q: "Your Grandmother and my grandfather are old", options: ["alt", "sind", "Opa", "mein", "und", "Oma", "deine"], a: "deine Oma und mein Opa sind alt" },
    { type: "jumble", q: "Your mother is young and my father is nice", options: ["nett", "ist", "Vater", "mein", "und", "jung", "ist", "Mutter", "deine"], a: "deine Mutter ist jung und mein Vater ist nett" },

    // --- STEP 7: FINAL BOSS ---
    { type: "boss", q: "Translate: 'Your grandfather is nice.'", options: ["Dein Opa ist nett", "Deine Opa ist nett"], a: "Dein Opa ist nett" },
    { type: "boss", q: "Translate: 'Your grandmother and my sister are young.'", options: ["Deine Oma und meine Schwester sind jung", "Dein Oma und mein Schwester ist jung"], a: "Deine Oma und meine Schwester sind jung" },
    { type: "jumble", q: "Final Order: My brother your sister and the father", options: ["Vater", "der", "und", "Schwester", "deine", "Bruder", "mein"], a: "mein Bruder deine Schwester und der Vater" },
    { type: "boss", q: "Which possessive matches 'Opa'?", options: ["mein", "meine"], a: "mein" },
    { type: "boss", q: "Final Test: 'Your mother is not young.'", options: ["Deine Mutter ist nicht jung", "Dein Mutter ist nicht jung"], a: "Deine Mutter ist nicht jung" }
  ]
},// src/data/section-1.js (Unit 2, Level 3)
{
  levelId: "3",
  title: "He, She, and the Relatives",
  questions: [
    // --- STEP 1: NEW RELATIVES (MASCULINE) ---
    { type: "intro", word: "der Onkel", translation: "The Uncle", content: "Meet the rest of the family! 'Onkel' is Masculine (der/mein/dein)." },
    { type: "choice", q: "How do you say 'My uncle'?", options: ["meine Onkel", "mein Onkel"], a: "mein Onkel" },
    { type: "jumble", q: "Your uncle is nice", options: ["nett", "ist", "dein", "Onkel"], a: "dein Onkel ist nett" },

    // --- STEP 2: NEW RELATIVES (FEMININE) ---
    { type: "intro", word: "die Tante", translation: "The Aunt", content: "Aunt is Feminine: 'die Tante' (die/meine/deine)." },
    { type: "choice", q: "How do you say 'Your aunt'?", options: ["dein Tante", "deine Tante"], a: "deine Tante" },
    { type: "jumble", q: "My aunt is young", options: ["jung", "ist", "meine", "Tante"], a: "meine Tante ist jung" },

    // --- STEP 3: POINTING (DAS) ---
    { type: "intro", word: "das", translation: "that / this", content: "Use 'das ist' to point someone out." },
    { type: "jumble", q: "That is my uncle", options: ["Onkel", "mein", "ist", "das"], a: "das ist mein Onkel" },
    { type: "jumble", q: "That is your aunt", options: ["Tante", "deine", "ist", "das"], a: "das ist deine Tante" },

    // --- STEP 4: ASKING (WER) ---
    { type: "intro", word: "wer", translation: "who", content: "Use 'wer' to ask about a person you don't know." },
    { type: "jumble", q: "Who is that?", options: ["das", "ist", "wer"], a: "wer ist das" },
    { type: "jumble", q: "Who is your uncle?", options: ["Onkel", "dein", "ist", "wer"], a: "wer ist dein Onkel" },

    // --- STEP 5: PRONOUNS (ER / SIE) ---
    { type: "intro", word: "er / sie", translation: "he / she", content: "Instead of repeating the name, use 'er' for men and 'sie' for women." },
    
    { type: "choice", q: "Which word means 'She'?", options: ["er", "sie", "wer"], a: "sie" },
    { type: "jumble", q: "He is old", options: ["alt", "ist", "er"], a: "er ist alt" },
    { type: "jumble", q: "She is very nice", options: ["nett", "sehr", "ist", "sie"], a: "sie ist sehr nett" },

    // --- STEP 6: PROGRESSIVE DESCRIPTION (PRONOUN + RELATIVE) ---
    { type: "jumble", q: "That is my Grandfather. He is nice.", options: ["nett", "ist", "er", "Opa", "mein", "ist", "das"], a: "das ist mein Opa er ist nett" },
    { type: "jumble", q: "That is your aunt. She is young.", options: ["jung", "ist", "sie", "Tante", "deine", "ist", "das"], a: "das ist deine Tante sie ist jung" },
    { type: "choice", q: "If 'Onkel' is masculine, which pronoun do we use?", options: ["er", "sie"], a: "er" },

    // --- STEP 7: FINAL BOSS ---
    { type: "boss", q: "Translate: 'Who is that? That is my uncle.'", options: ["Wer ist das? Das ist mein Onkel", "Wer ist das? Das ist meine Onkel"], a: "Wer ist das? Das ist mein Onkel" },
    { type: "jumble", q: "My aunt and your uncle are very nice", options: ["nett", "sehr", "sind", "Onkel", "dein", "und", "Tante", "meine"], a: "meine Tante und dein Onkel sind sehr nett" },
    { type: "boss", q: "Translate: 'She is not old.'", options: ["Sie ist nicht alt", "Er ist nicht alt"], a: "Sie ist nicht alt" },
    { type: "jumble", q: "That is my sister. She is nice.", options: ["nett", "ist", "sie", "Schwester", "meine", "ist", "das"], a: "das ist meine Schwester sie ist nett" },
    { type: "boss", q: "Final Test: Which word is feminine?", options: ["Opa", "Onkel", "Tante"], a: "Tante" }
  ]
},
// src/data/section-1.js (Unit 2, Level 3)
// src/data/section-1.js (Unit 2, Level 4)
// src/data/section-1.js (Unit 2, Level 4)
{
  levelId: "4",
  title: "Family Tree Builder",
  questions: [
    // --- STEP 1: THE SON (MASCULINE BRANCH) ---
    { type: "intro", word: "der Sohn", translation: "The Son", content: "Every family tree has branches. 'Sohn' is Masculine (der/mein/dein)." },
    { type: "choice", q: "How do you say 'Your son'?", options: ["deine Sohn", "dein Sohn"], a: "dein Sohn" },
    { type: "jumble", q: "My son is young", options: ["jung", "ist", "mein", "Sohn"], a: "mein Sohn ist jung" },

    // --- STEP 2: THE DAUGHTER (FEMININE BRANCH) ---
    { type: "intro", word: "die Tochter", translation: "The Daughter", content: "Daughter is Feminine: 'die Tochter' (die/meine/deine)." },
    
    { type: "choice", q: "How do you say 'My daughter'?", options: ["mein Tochter", "meine Tochter"], a: "meine Tochter" },
    { type: "jumble", q: "Is your daughter nice?", options: ["nett", "Tochter", "deine", "Ist"], a: "Ist deine Tochter nett" },

    // --- STEP 3: THE PLURAL (KINDER) ---
    { type: "intro", word: "die Kinder", translation: "The Children", content: "Plural nouns like 'Kinder' use 'meine/deine' and the verb 'sind'." },
    { type: "jumble", q: "Your children are very nice", options: ["nett", "sehr", "sind", "Kinder", "deine"], a: "deine Kinder sind sehr nett" },
    { type: "jumble", q: "My son and my daughter are children", options: ["Kinder", "sind", "Tochter", "meine", "und", "Sohn", "mein"], a: "mein Sohn und meine Tochter sind children" },

    // --- STEP 4: SIZE DESCRIPTION (KLEIN) ---
    { type: "intro", word: "klein", translation: "small / short", content: "Use 'klein' to describe height, especially for children!" },
    { type: "choice", q: "How do you say 'is small'?", options: ["ist klein", "ist groß", "ist alt"], a: "ist klein" },
    { type: "jumble", q: "My daughter is small", options: ["klein", "ist", "meine", "Tochter"], a: "meine Tochter ist klein" },

    // --- STEP 5: THE GRANDCHILDREN (ENKEL / ENKELIN) ---
    { type: "intro", word: "Enkel & Enkelin", translation: "Grandson & Granddaughter", content: "The bottom of the tree! 'Enkel' (M) and 'Enkelin' (F)." },
    { type: "jumble", q: "That is my grandson", options: ["Enkel", "mein", "ist", "das"], a: "das ist mein Enkel" },
    { type: "jumble", q: "Your granddaughter is small", options: ["klein", "ist", "deine", "Enkelin"], a: "deine Enkelin ist klein" },

    // --- STEP 6: CONNECTING THE BRANCHES ---
    { type: "jumble", q: "Who is that? That is my daughter", options: ["Tochter", "meine", "ist", "das", "das", "ist", "wer"], a: "wer ist das das ist meine Tochter" },
    { type: "jumble", q: "He is my son and she is my daughter", options: ["Tochter", "meine", "ist", "sie", "und", "Sohn", "mein", "ist", "er"], a: "er ist mein Sohn und sie ist meine Tochter" },

    // --- STEP 7: COMPLEX TREE DESCRIPTIONS ---
    { type: "jumble", q: "My parents and my children are here", options: ["hier", "sind", "Kinder", "meine", "und", "Eltern", "meine"], a: "meine Eltern und meine Kinder sind hier" },
    { type: "jumble", q: "Your grandson is young but your grandfather is old", options: ["alt", "ist", "Opa", "dein", "aber", "jung", "ist", "Enkel", "dein"], a: "dein Enkel ist jung aber dein Opa ist alt" },

    // --- FINAL BOSS CHALLENGES ---
    { type: "boss", q: "Translate: 'Is that your son?'", options: ["Ist das dein Sohn?", "Ist das deine Sohn?"], a: "Ist das dein Sohn?" },
    { type: "boss", q: "Which word means 'The Children'?", options: ["die Kinder", "der Kinder", "das Kinder"], a: "die Kinder" },
    { type: "jumble", q: "Final Tree: My father my son and my grandson", options: ["Enkel", "mein", "und", "Sohn", "mein", "Vater", "mein"], a: "mein Vater mein Sohn und mein Enkel" },
    { type: "boss", q: "Which pronoun replaces 'die Tochter'?", options: ["er", "sie"], a: "sie" },
    { type: "boss", q: "Final Test: 'My children are not small.'", options: ["Meine Kinder sind nicht klein", "Mein Kinder ist nicht klein"], a: "Meine Kinder sind nicht klein" }
  ]
},
// src/data/section-1.js (Unit 2, Level 5)
// src/data/section-1.js (Unit 2, Level 5)
// src/data/section-1.js (Unit 2, Level 5)
// src/data/section-1.js (Unit 2, Level 5)
{
  levelId: "5",
  title: "The Big Family Dinner",
  questions: [
    // --- ITEM 1: THE COUSINS (MALE/FEMALE) ---
    { type: "intro", word: "Cousin & Cousine", translation: "Cousin (m) & Cousin (f)", content: "The children of your Tante/Onkel. 'Der Cousin' (m) and 'Die Cousine' (f)." },
    
    { type: "choice", q: "How do you say 'My female cousin'?", options: ["mein Cousine", "meine Cousine"], a: "meine Cousine" },
    { type: "jumble", q: "My cousin is there", options: ["dort", "ist", "mein", "Cousin"], a: "mein Cousin ist dort" },

    // --- ITEM 2: NEPHEW & NIECE ---
    { type: "intro", word: "Neffe & Nichte", translation: "Nephew & Niece", content: "The children of your brother/sister. 'Der Neffe' (m) and 'Die Nichte' (f)." },
    { type: "choice", q: "Which one is feminine?", options: ["Neffe", "Nichte"], a: "Nichte" },
    { type: "jumble", q: "Is that your niece?", options: ["Nichte", "deine", "das", "Ist"], a: "Ist deine Nichte das" },

    // --- ITEM 3: GRANDSON & GRANDDAUGHTER ---
    { type: "intro", word: "Enkel & Enkelin", translation: "Grandson & Granddaughter", content: "The children of your son/daughter. 'Der Enkel' (m) and 'Die Enkelin' (f)." },
    
    { type: "jumble", q: "Your grandson is young", options: ["jung", "ist", "dein", "Enkel"], a: "dein Enkel ist jung" },
    { type: "jumble", q: "Who is that? That is my granddaughter", options: ["Enkelin", "meine", "ist", "das", "das", "ist", "wer"], a: "wer ist das das ist meine Enkelin" },

    // --- ITEM 4: THE FAMILY (DIE FAMILIE) ---
    { type: "intro", word: "die Familie", translation: "The Family", content: "Feminine singular. Use 'hat' because the family is one group." },
    { type: "choice", q: "Translate: 'Your family'", options: ["deine Familie", "dein Familie"], a: "deine Familie" },
    { type: "jumble", q: "My family is very big", options: ["groß", "sehr", "ist", "meine", "Familie"], a: "meine Familie ist sehr groß" },

    // --- ITEM 5: VERB CONJUGATION (HAT vs HABEN) ---
    { type: "intro", word: "hat / haben", translation: "has / have", content: "Use 'hat' for one person and 'haben' for many (the parents/they)." },
    { type: "choice", q: "Which one matches 'Die Eltern' (The parents)?", options: ["hat", "haben"], a: "haben" },
    { type: "jumble", q: "The children have hunger", options: ["Hunger", "haben", "Kinder", "die"], a: "die Kinder haben Hunger" },

    // --- PROGRESSIVE MIXING (The Dinner Scene) ---
    { type: "jumble", q: "My cousin and my niece have hunger", options: ["Hunger", "haben", "Nichte", "meine", "und", "Cousin", "mein"], a: "mein Cousin und meine Nichte haben Hunger" },
    { type: "jumble", q: "He is my nephew and he is very nice", options: ["nett", "sehr", "ist", "er", "und", "Neffe", "mein", "ist", "er"], a: "er ist mein Neffe und er ist sehr nett" },
    { type: "jumble", q: "Your granddaughter or your grandson has hunger", options: ["Hunger", "hat", "Enkel", "dein", "oder", "Enkelin", "deine"], a: "deine Enkelin oder dein Enkel hat Hunger" },

    // --- FINAL BOSS CHALLENGES ---
    { type: "boss", q: "Translate: 'Is that your cousin (f)?'", options: ["Ist das deine Cousine?", "Ist das dein Cousine?"], a: "Ist das deine Cousine?" },
    { type: "boss", q: "Which pronoun describes 'der Neffe'?", options: ["er", "sie"], a: "er" },
    { type: "jumble", q: "Final: My family is there and they have hunger", options: ["Hunger", "haben", "sie", "und", "dort", "ist", "meine", "Familie"], a: "meine Familie ist dort und sie haben Hunger" },
    { type: "boss", q: "Which word means 'Granddaughter'?", options: ["Enkelin", "Nichte", "Tochter"], a: "Enkelin" },
    { type: "boss", q: "Final Check: 'My niece is not small.'", options: ["Meine Nichte ist nicht klein", "Mein Nichte ist nicht klein"], a: "Meine Nichte ist nicht klein" }
  ]
} ]
},
{
  unitId: "3",
  unitTitle: "Use Adjectives",
  levels: [
    // --- LEVEL 1: COMMON OPPOSITES ---
    {
      levelId: "1",
      title: "Common Opposites",
      questions: [
        { 
          type: "intro", 
          word: "traurig / glücklich", 
          translation: "sad / happy", 
          content: "Describe emotions! 'Traurig' (sad) and 'glücklich' (happy)." 
        },
        
        { type: "choice", q: "How do you say 'happy'?", options: ["glücklich", "traurig"], a: "glücklich" },
        { type: "jumble", q: "My daughter is happy", options: ["glücklich", "ist", "meine", "Tochter"], a: "meine Tochter ist glücklich" },
        { type: "jumble", q: "Your son is sad", options: ["traurig", "ist", "dein", "Sohn"], a: "dein Sohn ist traurig" },
        { 
          type: "intro", 
          word: "müde / wach", 
          translation: "tired / awake", 
          content: "Use 'müde' for tired and 'wach' for awake." 
        },
        { type: "choice", q: "If you want to sleep, you are...", options: ["wach", "müde"], a: "müde" },
        { type: "jumble", q: "My Grandfather is awake but my grandmother is tired", options: ["müde", "ist", "Oma", "meine", "aber", "wach", "ist", "Opa", "mein"], a: "mein Opa ist wach aber meine Oma ist müde" },
        { 
          type: "intro", 
          word: "schnell / langsam", 
          translation: "fast / slow", 
          content: "Describe movement! 'Schnell' (fast) vs 'Langsam' (slow)." 
        },
        
        { type: "choice", q: "Which word means 'fast'?", options: ["schnell", "langsam"], a: "schnell" },
        { type: "jumble", q: "Your grandson is fast", options: ["schnell", "ist", "dein", "Enkel"], a: "dein Enkel ist schnell" },
        { type: "jumble", q: "My grandmother is slow", options: ["langsam", "ist", "meine", "Oma"], a: "meine Oma ist langsam" },
        { 
          type: "intro", 
          word: "laut / leise", 
          translation: "loud / quiet", 
          content: "Is the family dinner 'laut' or 'leise'?" 
        },
        { type: "choice", q: "Which one means 'quiet'?", options: ["laut", "leise"], a: "leise" },
        { type: "jumble", q: "The children are very loud", options: ["laut", "sehr", "sind", "Kinder", "die"], a: "die Kinder sind sehr laut" },
        { 
          type: "intro", 
          word: "klug / dumm", 
          translation: "smart / dumb", 
          content: "Use 'klug' for smart. Avoid 'dumm' unless you're joking!" 
        },
        { type: "choice", q: "Which word means 'smart'?", options: ["klug", "dumm"], a: "klug" },
        { type: "jumble", q: "My family is very smart", options: ["klug", "sehr", "ist", "meine", "Familie"], a: "meine Familie ist sehr klug" },
        { type: "boss", q: "Translate: 'Is your granddaughter smart?'", options: ["Ist deine Enkelin klug?", "Ist dein Enkelin klug?"], a: "Ist deine Enkelin klug?" },
        { type: "boss", q: "Final: My cousin is fast but she is tired", options: ["müde", "ist", "sie", "aber", "schnell", "Cousine", "meine"], a: "meine Cousine ist schnell aber sie ist müde" }
      ]
    },

    // --- LEVEL 2: COLORS & SIZES ---
    {
      levelId: "2",
      title: "Colors & Sizes",
      questions: [
        { type: "intro", word: "rot / blau", translation: "red / blue", content: "Primary colors! 'Rot' and 'Blau'." },
        
        { type: "jumble", q: "The car is red", options: ["rot", "ist", "Auto", "das"], a: "das Auto ist rot" },
        { type: "jumble", q: "Is your car blue?", options: ["blau", "Auto", "dein", "Ist"], a: "Ist dein Auto blau" },
        { type: "intro", word: "schwarz / weiß", translation: "black / white", content: "'Schwarz' and 'Weiß'." },
        { type: "choice", q: "What color is a zebra?", options: ["schwarz und weiß", "rot und blau"], a: "schwarz und weiß" },
        { type: "jumble", q: "My sister is black and white", options: ["weiß", "und", "schwarz", "ist", "Schwester", "meine"], a: "meine Schwester ist schwarz und weiß" },
        { type: "intro", word: "gelb / grün", translation: "yellow / green", content: "'Gelb' and 'Grün'." },
        { type: "jumble", q: "The apple is green", options: ["grün", "ist", "Apfel", "der"], a: "der Apfel ist grün" },
        { type: "intro", word: "lang / kurz", translation: "long / short", content: "Use 'lang' (long) and 'kurz' (short) for objects." },
        { type: "choice", q: "Opposite of 'kurz'?", options: ["lang", "weiß"], a: "lang" },
        { type: "jumble", q: "The long car is yellow", options: ["gelb", "ist", "Auto", "lange", "das"], a: "das lange Auto ist gelb" },
        { type: "intro", word: "neu / alt", translation: "new / old", content: "We use 'alt' for things too! 'Neu' is the opposite." },
        { type: "jumble", q: "Is the car new or old?", options: ["alt", "oder", "neu", "Auto", "das", "Ist"], a: "Ist das Auto neu oder alt" },
        { type: "jumble", q: "My grandson is small and his car is blue", options: ["blau", "ist", "Auto", "sein", "und", "klein", "ist", "Enkel", "mein"], a: "mein Enkel ist klein und sein Auto ist blau" },
        { type: "boss", q: "Translate: 'The white car is new.'", options: ["Das weiße Auto ist neu", "Das weiß Auto ist neu"], a: "Das weiße Auto ist neu" },
        { type: "boss", q: "Final: 'The red apple is small.'", options: ["Der rote Apfel ist klein", "Der rot Apfel ist klein"], a: "Der rote Apfel ist klein" }
      ]
    },

    // --- LEVEL 3: BASIC SENTENCE STRUCTURE ---
    {
      levelId: "3",
      title: "Basic Sentence Structure",
      questions: [
        { type: "intro", word: "Subjekt + ist + Adjektiv", translation: "Sentence order", content: "Simple order: 'Mein Bruder (Subjekt) ist (Verb) klug (Adjektiv)'." },
        { type: "jumble", q: "My nephew is smart", options: ["klug", "ist", "Neffe", "mein"], a: "mein Neffe ist klug" },
        { type: "intro", word: "nicht", translation: "not", content: "Put 'nicht' before the adjective to negate it." },
        { type: "choice", q: "How to say 'is not tired'?", options: ["ist nicht müde", "nicht ist müde"], a: "ist nicht müde" },
        { type: "jumble", q: "My niece is not slow", options: ["langsam", "nicht", "ist", "Nichte", "meine"], a: "meine Nichte ist nicht langsam" },
        { type: "intro", word: "ist / sind", translation: "is / are", content: "One person = ist. Multiple people = sind." },
        { type: "jumble", q: "The children are not quiet", options: ["leise", "nicht", "sind", "Kinder", "die"], a: "die Kinder sind nicht leise" },
        { type: "intro", word: "auch", translation: "also / too", content: "Use 'auch' to add an adjective: 'Er ist auch groß'." },
        { type: "jumble", q: "Your son is also fast", options: ["schnell", "auch", "ist", "Sohn", "dein"], a: "dein Sohn ist auch schnell" },
        { type: "intro", word: "aber", translation: "but", content: "Connect different thoughts with 'aber'." },
        { type: "jumble", q: "She is happy but tired", options: ["müde", "aber", "glücklich", "ist", "sie"], a: "sie ist glücklich aber müde" },
        { type: "jumble", q: "My daughter is smart but not loud", options: ["laut", "nicht", "aber", "klug", "ist", "Tochter", "meine"], a: "meine Tochter ist klug aber nicht laut" },
        { type: "boss", q: "Translate: 'They are not awake.'", options: ["Sie sind nicht wach", "Sie ist nicht wach"], a: "Sie sind nicht wach" },
        { type: "boss", q: "Final Boss: 'He is loud but also very nice.'", options: ["Er ist laut aber auch sehr nett", "Er ist leise aber auch sehr nett"], a: "Er ist laut aber auch sehr nett" }
      ]
    },

    // --- LEVEL 4: INTENSITY: SEHR & GANZ ---
    {
      levelId: "4",
      title: "Intensity: Sehr & Ganz",
      questions: [
        { type: "intro", word: "sehr", translation: "very", content: "Use 'sehr' to make adjectives stronger." },
        { type: "jumble", q: "My father is very old", options: ["alt", "sehr", "ist", "Vater", "mein"], a: "mein Vater ist sehr alt" },
        { type: "intro", word: "ganz", translation: "quite / really", content: "In German, 'ganz' can mean 'quite' or 'completely'." },
        { type: "choice", q: "Which means 'quite smart'?", options: ["ganz klug", "sehr klug"], a: "ganz klug" },
        { type: "jumble", q: "The car is quite fast", options: ["schnell", "ganz", "ist", "Auto", "das"], a: "das Auto ist ganz schnell" },
        { type: "intro", word: "wirklich", translation: "really", content: "Use 'wirklich' for total emphasis." },
        { type: "jumble", q: "Your niece is really fast", options: ["schnell", "wirklich", "ist", "Nichte", "deine"], a: "deine Nichte ist wirklich schnell" },
        { type: "intro", word: "zu", translation: "too", content: "Use 'zu' when something is 'too much' (e.g., too loud)." },
        { type: "jumble", q: "The children are too loud", options: ["laut", "zu", "sind", "Kinder", "die"], a: "die Kinder sind zu laut" },
        { type: "intro", word: "extrem", translation: "extremely", content: "For maximum intensity!" },
        { type: "jumble", q: "My brother is extremely happy", options: ["glücklich", "extrem", "ist", "Bruder", "mein"], a: "mein Bruder ist extrem glücklich" },
        { type: "jumble", q: "My car is too old but it is very fast", options: ["schnell", "sehr", "ist", "es", "aber", "alt", "zu", "ist", "Auto", "mein"], a: "mein Auto ist zu alt aber es ist sehr schnell" },
        { type: "boss", q: "Translate: 'The red car is extremely slow.'", options: ["Das rote Auto ist extrem langsam", "Das rot Auto ist extrem langsam"], a: "Das rote Auto ist extrem langsam" },
        { type: "boss", q: "Final: 'The children are quite quiet today.'", options: ["Die Kinder sind ganz leise heute", "Die Kinder ist ganz leise heute"], a: "Die Kinder sind ganz leise heute" }
      ]
    },

    // --- LEVEL 5: ADJECTIVE MASTER CLASS ---
    {
      levelId: "5",
      title: "Adjective Master Class",
      questions: [
        { type: "intro", word: "Review", translation: "Final Exam", content: "Time to mix colors, intensity, and family!" },
        { type: "jumble", q: "My black car is very fast", options: ["schnell", "sehr", "ist", "Auto", "schwarzes", "mein"], a: "mein schwarzes Auto ist sehr schnell" },
        { type: "intro", word: "so... wie", translation: "as... as", content: "Use 'so... wie' for comparisons." },
        { type: "choice", q: "How to say 'as smart as'?", options: ["so klug wie", "sehr klug wie"], a: "so klug wie" },
        { type: "jumble", q: "He is as old as my opa", options: ["Opa", "mein", "wie", "alt", "so", "ist", "er"], a: "er ist so alt wie mein Opa" },
        { type: "intro", word: "alles", translation: "everything", content: "'Alles' describes the whole situation." },
        { type: "jumble", q: "Everything is green and red", options: ["rot", "und", "grün", "ist", "alles"], a: "alles ist grün und rot" },
        { type: "intro", word: "genug", translation: "enough", content: "Put 'genug' after the adjective (e.g., klug genug)." },
        { type: "jumble", q: "Is your nephew smart enough?", options: ["genug", "klug", "Neffe", "dein", "Ist"], a: "Ist dein Neffe klug genug" },
        { type: "intro", word: "total", translation: "totally", content: "Commonly used for emphasis in casual speech." },
        { type: "jumble", q: "My niece is totally happy", options: ["glücklich", "total", "ist", "Nichte", "meine"], a: "meine Nichte ist total glücklich" },
        { type: "jumble", q: "The white car is not fast enough", options: ["genug", "schnell", "nicht", "ist", "Auto", "weiße", "das"], a: "das weiße Auto ist nicht schnell genug" },
        { type: "boss", q: "Final Boss: 'Everything is red but my car is really black.'", options: ["Alles ist rot aber mein Auto ist wirklich schwarz", "Alles ist blau aber mein Auto ist grün"], a: "Alles ist rot aber mein Auto ist wirklich schwarz" }
      
      ]
    }
  ]
},{
  unitId: "4",
  unitTitle: "Greet People",
  levels: [
    // --- LEVEL 1: MORNING, DAY & NIGHT ---
    {
      levelId: "1",
      title: "Morning, Day & Night",
      questions: [
        { id: "4-1-1", type: "intro", word: "Guten Morgen", translation: "Good Morning", content: "Use this until 11:00 AM." },
        
        { id: "4-1-2", type: "choice", q: "How do you greet your father at 8 AM?", options: ["Guten Tag", "Guten Morgen"], a: "Guten Morgen" },
        { id: "4-1-3", type: "jumble", q: "Good morning my son", options: ["Sohn", "Morgen", "mein", "Guten"], a: "Guten Morgen mein Sohn" },
        { id: "4-1-4", type: "choice", q: "Translate: 'Good morning mother'", options: ["Guten Morgen Mutter", "Guten Tag Mutter"], a: "Guten Morgen Mutter" },
        { id: "4-1-5", type: "intro", word: "Guten Tag", translation: "Good Day", content: "The most common greeting from noon until evening." },
        { id: "4-1-6", type: "jumble", q: "Good day my niece", options: ["Tag", "Nichte", "Guten", "meine"], a: "Guten Tag meine Nichte" },
        { id: "4-1-7", type: "choice", q: "Is 'Guten Tag' for the morning?", options: ["Yes", "No"], a: "No" },
        { id: "4-1-8", type: "jumble", q: "The day is very happy", options: ["Tag", "glücklich", "der", "sehr", "ist"], a: "der Tag ist sehr glücklich" },
        { id: "4-1-9", type: "intro", word: "Guten Abend", translation: "Good Evening", content: "Use this when the sun goes down (6 PM+)." },
        { id: "4-1-10", type: "choice", q: "Greeting at 8 PM?", options: ["Guten Abend", "Guten Morgen"], a: "Guten Abend" },
        { id: "4-1-11", type: "jumble", q: "Good evening my family", options: ["Guten", "meine", "Abend", "Familie"], a: "Guten Abend meine Familie" },
        { id: "4-1-12", type: "intro", word: "Gute Nacht", translation: "Good Night", content: "Only used when someone is going to sleep! Notice it is 'Gute' not 'Guten'." },
        
        { id: "4-1-13", type: "choice", q: "Which is correct for sleeping?", options: ["Guten Nacht", "Gute Nacht"], a: "Gute Nacht" },
        { id: "4-1-14", type: "jumble", q: "Good night my granddaughter", options: ["Nacht", "meine", "Enkelin", "Gute"], a: "Gute Nacht meine Enkelin" },
        { id: "4-1-15", type: "intro", word: "Schlaf gut", translation: "Sleep well", content: "The standard follow-up to Gute Nacht." },
        { id: "4-1-16", type: "jumble", q: "Sleep well my grandson", options: ["gut", "Schlaf", "mein", "Enkel"], a: "Schlaf gut mein Enkel" },
        { id: "4-1-17", type: "choice", q: "Is your nephew tired?", options: ["Ist dein Neffe müde?", "Hat dein Neffe müde?"], a: "Ist dein Neffe müde?" },
        { id: "4-1-18", type: "jumble", q: "Good evening everything is quiet", options: ["Guten", "leise", "Abend", "ist", "alles"], a: "Guten Abend alles ist leise" },
        { id: "4-1-19", type: "choice", q: "Opposite of 'Guten Morgen'?", options: ["Guten Tag", "Guten Abend"], a: "Guten Abend" },
        { id: "4-1-20", type: "boss", q: "Final: Good morning, is the coffee hot?", options: ["Guten Morgen, ist der Kaffee heiß?", "Guten Abend, ist der Kaffee heiß?"], a: "Guten Morgen, ist der Kaffee heiß?" }
      ]
    },

    // --- LEVEL 2: FORMAL VS. INFORMAL ---
    {
      levelId: "2",
      title: "Formal vs. Informal",
      questions: [
        { id: "4-2-1", type: "intro", word: "Hallo / Hi", translation: "Hello / Hi", content: "Informal. Use with friends and family." },
        { id: "4-2-2", type: "choice", q: "Greet your brother:", options: ["Guten Tag", "Hallo"], a: "Hallo" },
        { id: "4-2-3", type: "jumble", q: "Hello my smart cousin", options: ["mein", "kluger", "Cousin", "Hallo"], a: "Hallo mein kluger Cousin" },
        { id: "4-2-4", type: "intro", word: "Grüß Gott / Moin", translation: "Regional Greetings", content: "'Grüß Gott' (South), 'Moin' (North)." },
        { id: "4-2-5", type: "choice", q: "Greeting in Munich (South)?", options: ["Moin", "Grüß Gott"], a: "Grüß Gott" },
        { id: "4-2-6", type: "jumble", q: "Hello everything is red", options: ["ist", "alles", "rot", "Hallo"], a: "Hallo alles ist rot" },
        { id: "4-2-7", type: "intro", word: "Tschüss", translation: "Bye", content: "The most common informal way to say goodbye." },
        { id: "4-2-8", type: "choice", q: "Saying goodbye to a friend?", options: ["Tschüss", "Guten Tag"], a: "Tschüss" },
        { id: "4-2-9", type: "jumble", q: "Bye my nice niece", options: ["Tschüss", "nette", "meine", "Nichte"], a: "Tschüss meine nette Nichte" },
        { id: "4-2-10", type: "intro", word: "Auf Wiedersehen", translation: "Goodbye", content: "Formal goodbye. Use for strangers or professionals." },
        
        { id: "4-2-11", type: "choice", q: "Formal goodbye?", options: ["Auf Wiedersehen", "Tschüss"], a: "Auf Wiedersehen" },
        { id: "4-2-12", type: "jumble", q: "Goodbye my family is big", options: ["Wiedersehen", "groß", "ist", "Auf", "meine", "Familie"], a: "Auf Wiedersehen meine Familie ist groß" },
        { id: "4-2-13", type: "intro", word: "Bis später / Bis bald", translation: "See you later / See you soon", content: "Informal ends to a talk." },
        { id: "4-2-14", type: "choice", q: "Which means 'See you soon'?", options: ["Bis später", "Bis bald"], a: "Bis bald" },
        { id: "4-2-15", type: "jumble", q: "See you later my nephew", options: ["später", "Bis", "Neffe", "mein"], a: "Bis später mein Neffe" },
        { id: "4-2-16", type: "choice", q: "Is 'Hallo' formal?", options: ["No", "Yes"], a: "No" },
        { id: "4-2-17", type: "jumble", q: "Hello your car is very fast", options: ["schnell", "Hallo", "sehr", "ist", "Auto", "dein"], a: "Hallo dein Auto ist sehr schnell" },
        { id: "4-2-18", type: "choice", q: "Opposite of 'Hallo'?", options: ["Tschüss", "Moin"], a: "Tschüss" },
        { id: "4-2-19", type: "jumble", q: "Goodbye the children are happy", options: ["Wiedersehen", "glücklich", "sind", "Auf", "Kinder", "die"], a: "Auf Wiedersehen die Kinder sind glücklich" },
        { id: "4-2-20", type: "boss", q: "Final: Formal 'Hello' and 'Goodbye'", options: ["Hallo / Tschüss", "Guten Tag / Auf Wiedersehen"], a: "Guten Tag / Auf Wiedersehen" }
      ]
    },

    // --- LEVEL 3: HOW ARE YOU? ---
    {
      levelId: "3",
      title: "How are you?",
      questions: [
        { id: "4-3-1", type: "intro", word: "Wie geht es dir?", translation: "How are you? (Informal)", content: "Literally: 'How goes it to you?'" },
        { id: "4-3-2", type: "choice", q: "Ask your sister how she is:", options: ["Wie geht es Ihnen?", "Wie geht es dir?"], a: "Wie geht es dir?" },
        { id: "4-3-3", type: "jumble", q: "Hello how are you cousin", options: ["geht", "es", "dir", "Wie", "Cousin", "Hallo"], a: "Hallo Wie geht es dir Cousin" },
        { id: "4-3-4", type: "intro", word: "Mir geht es gut", translation: "I am doing well", content: "The standard response. 'Mir' means 'to me'." },
        { id: "4-3-5", type: "choice", q: "Respond: 'I am well'", options: ["Mir geht es gut", "Mir geht es schlecht"], a: "Mir geht es gut" },
        { id: "4-3-6", type: "jumble", q: "I am well and happy", options: ["Mir", "geht", "gut", "es", "und", "glücklich"], a: "Mir geht es gut und glücklich" },
        { id: "4-3-7", type: "intro", word: "Und dir?", translation: "And you?", content: "The informal follow-up question." },
        { id: "4-3-8", type: "choice", q: "Ask 'And you?' back to a friend:", options: ["Und Ihnen?", "Und dir?"], a: "Und dir?" },
        { id: "4-3-9", type: "jumble", q: "I am tired and you", options: ["Ich", "müde", "Und", "bin", "dir"], a: "Ich bin müde Und dir" },
        { id: "4-3-10", type: "intro", word: "Wie geht es Ihnen?", translation: "How are you? (Formal)", content: "Use for adults or strangers." },
        
        { id: "4-3-11", type: "choice", q: "Formal 'How are you?'", options: ["Wie geht es Ihnen?", "Wie geht es dir?"], a: "Wie geht es Ihnen?" },
        { id: "4-3-12", type: "jumble", q: "Good day how are you (formal)", options: ["es", "geht", "Guten", "Wie", "Tag", "Ihnen"], a: "Guten Tag Wie geht es Ihnen" },
        { id: "4-3-13", type: "intro", word: "Schlecht", translation: "Bad", content: "When things aren't going well." },
        { id: "4-3-14", type: "choice", q: "Translate: 'Bad'", options: ["Schlecht", "Gut"], a: "Schlecht" },
        { id: "4-3-15", type: "jumble", q: "My niece is doing bad", options: ["es", "meiner", "schlecht", "geht", "Nichte"], a: "meiner Nichte geht es schlecht" },
        { id: "4-3-16", type: "choice", q: "Ask 'And you?' formally:", options: ["Und dir?", "Und Ihnen?"], a: "Und Ihnen?" },
        { id: "4-3-17", type: "jumble", q: "I am smart, I am doing well", options: ["klug", "bin", "Mir", "gut", "es", "geht", "Ich"], a: "Ich bin klug Mir geht es gut" },
        { id: "4-3-18", type: "choice", q: "Is 'Mir geht es gut' used for both?", options: ["Yes", "No"], a: "Yes" },
        { id: "4-3-19", type: "jumble", q: "The family is doing well", options: ["gut", "der", "es", "geht", "Familie"], a: "der Familie geht es gut" },
        { id: "4-3-20", type: "boss", q: "Final: 'Good morning, how are you? I am tired.'", options: ["Guten Abend, wie geht es Ihnen? Ich bin wach.", "Guten Morgen, wie geht es dir? Ich bin müde."], a: "Guten Morgen, wie geht es dir? Ich bin müde." }
      ]
    },

    // --- LEVEL 4: INTRODUCTIONS ---
    {
      levelId: "4",
      title: "Introductions",
      questions: [
        { id: "4-4-1", type: "intro", word: "Ich heiße...", translation: "My name is...", content: "Means 'I am called...'" },
        { id: "4-4-2", type: "choice", q: "How do you say 'I am called'?", options: ["Ich bin", "Ich heiße"], a: "Ich heiße" },
        { id: "4-4-3", type: "jumble", q: "My name is Hans", options: ["Hans", "Ich", "heiße"], a: "Ich heiße Hans" },
        { id: "4-4-4", type: "intro", word: "Wie heißt du?", translation: "What is your name? (Informal)", content: "For peers/children." },
        { id: "4-4-5", type: "choice", q: "Ask a child their name:", options: ["Wie heißen Sie?", "Wie heißt du?"], a: "Wie heißt du?" },
        { id: "4-4-6", type: "jumble", q: "Hello what is your name", options: ["heißt", "Wie", "Hallo", "du"], a: "Hallo Wie heißt du" },
        { id: "4-4-7", type: "intro", word: "Freut mich", translation: "Pleased to meet you", content: "Short and polite response." },
        { id: "4-4-8", type: "choice", q: "Which means 'Pleased to meet you'?", options: ["Freut mich", "Tschüss"], a: "Freut mich" },
        { id: "4-4-9", type: "jumble", q: "My name is Sarah pleased to meet you", options: ["Sarah", "heiße", "Ich", "mich", "Freut"], a: "Ich heiße Sarah Freut mich" },
        { id: "4-4-10", type: "intro", word: "Das ist...", translation: "This is...", content: "For introducing others." },
        { id: "4-4-11", type: "choice", q: "Introduce your uncle:", options: ["Das heiße mein Onkel", "Das ist mein Onkel"], a: "Das ist mein Onkel" },
        { id: "4-4-12", type: "jumble", q: "This is my smart granddaughter", options: ["Enkelin", "ist", "kluge", "Das", "meine"], a: "Das ist meine kluge Enkelin" },
        { id: "4-4-13", type: "intro", word: "Wie heißen Sie?", translation: "What is your name? (Formal)", content: "For elders or strangers." },
        { id: "4-4-14", type: "choice", q: "Formal name question:", options: ["Wie heißt du?", "Wie heißen Sie?"], a: "Wie heißen Sie?" },
        { id: "4-4-15", type: "jumble", q: "Good day what is your name", options: ["Sie", "Tag", "heißen", "Guten", "Wie"], a: "Guten Tag Wie heißen Sie" },
        { id: "4-4-16", type: "choice", q: "Is 'Ich heiße' formal or informal?", options: ["Both", "Informal only"], a: "Both" },
        { id: "4-4-17", type: "jumble", q: "This is my blue car", options: ["Auto", "mein", "blaues", "Das", "ist"], a: "Das ist mein blaues Auto" },
        { id: "4-4-18", type: "choice", q: "Which word means 'pleased'?", options: ["Heißt", "Freut"], a: "Freut" },
        { id: "4-4-19", type: "jumble", q: "My grandson is tall and he is called Leo", options: ["Leo", "Mein", "heißt", "und", "er", "groß", "ist", "Enkel"], a: "Mein Enkel ist groß und er heißt Leo" },
        { id: "4-4-20", type: "boss", q: "Final: 'Hello, my name is Paul. This is my niece.'", options: ["Hallo, ich heiße Paul. Das ist meine Nichte.", "Hallo, wie heißt du? Das ist mein Neffe."], a: "Hallo, ich heiße Paul. Das ist meine Nichte." }
      ]
    },

    // --- LEVEL 5: THE PERFECT GREETING ---
    {
      levelId: "5",
      title: "The Perfect Greeting",
      questions: [
        { id: "4-5-1", type: "intro", word: "Willkommen", translation: "Welcome", content: "Greet someone arriving." },
        
        { id: "4-5-2", type: "choice", q: "How to say 'Welcome'?", options: ["Tschüss", "Willkommen"], a: "Willkommen" },
        { id: "4-5-3", type: "jumble", q: "Welcome my family", options: ["Willkommen", "Familie", "meine"], a: "Willkommen meine Familie" },
        { id: "4-5-4", type: "intro", word: "Entschuldigung", translation: "Excuse me / Sorry", content: "Polite way to start a talk." },
        { id: "4-5-5", type: "choice", q: "How do you say 'Excuse me'?", options: ["Entschuldigung", "Willkommen"], a: "Entschuldigung" },
        { id: "4-5-6", type: "jumble", q: "Excuse me how are you", options: ["Ihnen", "Entschuldigung", "geht", "wie", "es"], a: "Entschuldigung wie geht es Ihnen" },
        { id: "4-5-7", type: "intro", word: "Danke", translation: "Thanks", content: "Show gratitude." },
        { id: "4-5-8", type: "choice", q: "How to say 'Thanks'?", options: ["Danke", "Bitte"], a: "Danke" },
        { id: "4-5-9", type: "jumble", q: "Thank you my daughter", options: ["meine", "Danke", "Tochter"], a: "Danke meine Tochter" },
        { id: "4-5-10", type: "intro", word: "Bitte", translation: "Please / You are welcome", content: "Used for 'Please' or responding to 'Danke'." },
        { id: "4-5-11", type: "jumble", q: "Please my son is happy", options: ["mein", "glücklich", "Sohn", "ist", "Bitte"], a: "Bitte mein Sohn ist glücklich" },
        { id: "4-5-12", type: "intro", word: "Vielen Dank", translation: "Many thanks", content: "Very polite thanks." },
        { id: "4-5-13", type: "choice", q: "Which is 'Many thanks'?", options: ["Vielen Dank", "Schönen Tag"], a: "Vielen Dank" },
        { id: "4-5-14", type: "jumble", q: "Many thanks my father is happy", options: ["ist", "Vielen", "glücklich", "Dank", "mein", "Vater"], a: "Vielen Dank mein Vater ist glücklich" },
        { id: "4-5-15", type: "intro", word: "Schönen Tag noch", translation: "Have a nice day", content: "Goodbye during the day." },
        { id: "4-5-16", type: "choice", q: "Wish someone a nice day:", options: ["Schönen Tag noch", "Guten Morgen"], a: "Schönen Tag noch" },
        { id: "4-5-17", type: "jumble", q: "Goodbye and have a nice day", options: ["Wiedersehen", "Tag", "noch", "Schönen", "und", "Auf"], a: "Auf Wiedersehen und Schönen Tag noch" },
        { id: "4-5-18", type: "jumble", q: "Welcome my grandson is fast", options: ["ist", "schnell", "Willkommen", "mein", "Enkel"], a: "Willkommen mein Enkel ist schnell" },
        { id: "4-5-19", type: "choice", q: "Greeting at 11 PM?", options: ["Gute Nacht", "Guten Morgen"], a: "Gute Nacht" },
        { id: "4-5-20", type: "boss", q: "Final: 'Excuse me, is your family happy?'", options: ["Entschuldigung, ist deine Familie glücklich?", "Willkommen, ist deine Familie glücklich?"], a: "Entschuldigung, ist deine Familie glücklich?" }
      ]
    }
  ]
}, {
  unitId: "5",
  unitTitle: "Order In Restaurant",
  levels: [
    // --- LEVEL 1: COMMON GERMAN DISHES ---
   {
      levelId: "1",
      title: "Common German Dishes",
      questions: [
        { id: "5-1-1", type: "intro", word: "der Salat / die Pizza", translation: "the salad / the pizza", content: "Food nouns: 'Salat' is masculine (der), 'Pizza' is feminine (die)." },
        { id: "5-1-2", type: "choice", q: "How do you say 'the salad'?", options: ["die Pizza", "der Salat"], a: "der Salat" },
        { id: "5-1-3", type: "jumble", q: "the salad is green", options: ["grün", "Salat", "der", "ist"], a: "der Salat ist grün" },
        { id: "5-1-4", type: "jumble", q: "the pizza is new", options: ["Pizza", "neu", "die", "ist"], a: "die Pizza ist neu" },
        { id: "5-1-5", type: "intro", word: "die Suppe / das Wasser", translation: "the soup / the water", content: "Liquid items: 'Suppe' (die) and 'Wasser' (das)." },
        { id: "5-1-6", type: "choice", q: "Which one is 'the water'?", options: ["das Wasser", "die Suppe"], a: "das Wasser" },
        { id: "5-1-7", type: "jumble", q: "the soup is hot", options: ["heiß", "die", "ist", "Suppe"], a: "die Suppe ist heiß" },
        { id: "5-1-8", type: "intro", word: "heiß / kalt", translation: "hot / cold", content: "Temperature adjectives for your food." },
        { id: "5-1-9", type: "choice", q: "What is the opposite of 'heiß'?", options: ["kalt", "schnell"], a: "kalt" },
        { id: "5-1-10", type: "jumble", q: "the water is cold", options: ["kalt", "Wasser", "das", "ist"], a: "das Wasser ist kalt" },
        { id: "5-1-11", type: "intro", word: "der Kaffee / der Tee", translation: "the coffee / the tea", content: "Both drinks are masculine: 'der Kaffee' and 'der Tee'." },
        { id: "5-1-12", type: "choice", q: "How do you say 'the tea'?", options: ["der Kaffee", "der Tee"], a: "der Tee" },
        { id: "5-1-13", type: "jumble", q: "my coffee is hot", options: ["mein", "heiß", "Kaffee", "ist"], a: "mein Kaffee ist heiß" },
        { id: "5-1-14", type: "jumble", q: "is your tea cold", options: ["Ist", "dein", "kalt", "Tee"], a: "Ist dein Tee kalt" },
        { id: "5-1-15", type: "intro", word: "lecker", translation: "delicious", content: "Use this to describe good food." },
        { id: "5-1-16", type: "choice", q: "Which means 'delicious'?", options: ["lecker", "traurig"], a: "lecker" },
        { id: "5-1-17", type: "jumble", q: "the pizza is delicious", options: ["lecker", "die", "ist", "Pizza"], a: "die Pizza ist lecker" },
        { id: "5-1-18", type: "jumble", q: "my salad also is lecker", options: ["lecker", "auch", "ist", "Salat", "mein"], a: "mein Salat ist auch lecker" },
        { id: "5-1-19", type: "choice", q: "Is the soup delicious?", options: ["Ist die Suppe lecker?", "Ist der Suppe lecker?"], a: "Ist die Suppe lecker?" } ]
       },

    // --- LEVEL 2: I WOULD LIKE TO EAT... ---
    {
      levelId: "2",
      title: "I would like to eat...",
      questions: [
        { id: "5-2-1", type: "intro", word: "Ich möchte...", translation: "I would like...", content: "The polite way to order." },
        { id: "5-2-2", type: "choice", q: "How to say 'I would like'?", options: ["Ich möchte", "Ich heiße"], a: "Ich möchte" },
        { id: "5-2-3", type: "jumble", q: "I would like pizza", options: ["Pizza", "möchte", "Ich"], a: "Ich möchte Pizza" },
        { id: "5-2-4", type: "intro", word: "essen / trinken", translation: "to eat / to drink", content: "Verbs go at the end of 'Ich möchte' sentences." },
        { id: "5-2-5", type: "choice", q: "Which word means 'to drink'?", options: ["essen", "trinken"], a: "trinken" },
        { id: "5-2-6", type: "jumble", q: "I would like to eat", options: ["essen", "möchte", "Ich"], a: "Ich möchte essen" },
        { id: "5-2-7", type: "jumble", q: "I would like to drink water", options: ["Wasser", "möchte", "trinken", "Ich"], a: "Ich möchte Wasser trinken" },
        { id: "5-2-8", type: "intro", word: "Brot / Käse", translation: "bread / cheese", content: "'Das Brot' (neut) and 'der Käse' (masc)." },
        { id: "5-2-9", type: "choice", q: "What is 'bread'?", options: ["Brot", "Kaffee"], a: "Brot" },
        { id: "5-2-10", type: "jumble", q: "I would like to eat cheese", options: ["möchte", "Ich", "essen", "Käse"], a: "Ich möchte Käse essen" },
        { id: "5-2-11", type: "intro", word: "ein / eine", translation: "a / an", content: "Use 'ein' for masc/neut and 'eine' for feminine nouns." },
        { id: "5-2-12", type: "choice", q: "A pizza (feminine)?", options: ["eine Pizza", "ein Pizza"], a: "eine Pizza" },
        { id: "5-2-13", type: "jumble", q: "I would like a soup", options: ["möchte", "eine", "Suppe", "Ich"], a: "Ich möchte eine Suppe" },
        { id: "5-2-14", type: "jumble", q: "My daughter would like a pizza", options: ["eine", "möchte", "Tochter", "meine", "Pizza"], a: "meine Tochter möchte eine Pizza" },
        { id: "5-2-15", type: "intro", word: "was", translation: "what", content: "Ask 'Was möchtest du?'" },
        { id: "5-2-16", type: "choice", q: "What would you like to eat?", options: ["Was möchtest du essen?", "Wie möchtest du essen?"], a: "Was möchtest du essen?" },
        { id: "5-2-17", type: "jumble", q: "What would you like to drink", options: ["trinken", "möchtest", "Was", "du"], a: "Was möchtest du trinken" },
        { id: "5-2-18", type: "choice", q: "Is 'trinken' for coffee?", options: ["Yes", "No"], a: "Yes" },
        { id: "5-2-19", type: "jumble", q: "My son would like to drink a tea", options: ["Sohn", "möchte", "einen", "trinken", "mein", "Tee"], a: "mein Sohn möchte einen Tee trinken" },
        { id: "5-2-20", type: "boss", q: "Final: I would like to eat a pizza and drink a water", options: ["Ich möchte eine Pizza essen und ein Wasser trinken", "Ich möchte einen Pizza essen und eine Wasser trinken"], a: "Ich möchte eine Pizza essen und ein Wasser trinken" }
      ]
    },

    // --- LEVEL 3: THE ACCUSATIVE CASE (EINEN/EIN) ---
    {
      levelId: "3",
      title: "The Accusative Case",
      questions: [
        { id: "5-3-1", type: "intro", word: "einen", translation: "a/an (masculine object)", content: "When ordering, 'der' words change to 'einen' (e.g., einen Salat)." },
        { id: "5-3-2", type: "choice", q: "Order 'a salad' (masculine):", options: ["ein Salat", "einen Salat"], a: "einen Salat" },
        { id: "5-3-3", type: "jumble", q: "I would like a salad", options: ["Salat", "möchte", "einen", "Ich"], a: "Ich möchte einen Salat" },
        { id: "5-3-4", type: "jumble", q: "My father would like a tea", options: ["Vater", "einen", "Tee", "möchte", "mein"], a: "mein Vater möchte einen Tee" },
        { id: "5-3-5", type: "intro", word: "den", translation: "the (masculine object)", content: "When you want 'the' specific salad, 'der' becomes 'den'." },
        { id: "5-3-6", type: "choice", q: "Order 'the salad':", options: ["den Salat", "der Salat"], a: "den Salat" },
        { id: "5-3-7", type: "jumble", q: "I would like the coffee", options: ["Ich", "Kaffee", "den", "möchte"], a: "Ich möchte den Kaffee" },
        { id: "5-3-8", type: "intro", word: "bestellen", translation: "to order", content: "Another useful verb for the restaurant." },
        { id: "5-3-9", type: "choice", q: "How to say 'to order'?", options: ["bestellen", "essen"], a: "bestellen" },
        { id: "5-3-10", type: "jumble", q: "I would like to order", options: ["Ich", "möchte", "bestellen"], a: "Ich möchte bestellen" },
        { id: "5-3-11", type: "jumble", q: "I would like to order a soup", options: ["eine", "Ich", "bestellen", "Suppe", "möchte"], a: "Ich möchte eine Suppe bestellen" },
        { id: "5-3-12", type: "intro", word: "das Menü", translation: "the menu", content: "'Das Menü' is neutral." },
        { id: "5-3-13", type: "choice", q: "What is 'the menu'?", options: ["das Menü", "der Menü"], a: "das Menü" },
        { id: "5-3-14", type: "jumble", q: "The menu is new", options: ["ist", "Menü", "neu", "das"], a: "das Menü ist neu" },
        { id: "5-3-15", type: "jumble", q: "I would like the menu", options: ["möchte", "Menü", "das", "Ich"], a: "Ich möchte das Menü" },
        { id: "5-3-16", type: "choice", q: "Does 'eine' change for feminine objects?", options: ["No", "Yes"], a: "No" },
        { id: "5-3-17", type: "jumble", q: "My daughter would like the pizza", options: ["Pizza", "Tochter", "die", "möchte", "meine"], a: "meine Tochter möchte die Pizza" },
        { id: "5-3-18", type: "choice", q: "A coffee (masculine object)?", options: ["einen Kaffee", "ein Kaffee"], a: "einen Kaffee" },
        { id: "5-3-19", type: "jumble", q: "Would you like a tea", options: ["einen", "du", "Tee", "Möchtest"], a: "Möchtest du einen Tee" },
        { id: "5-3-20", type: "boss", q: "Final: I am ordering the salad and a soup", options: ["Ich bestelle den Salat und eine Suppe", "Ich bestelle der Salat und eine Suppe"], a: "Ich bestelle den Salat und eine Suppe" }
      ]
    },

    // --- LEVEL 4: ALLERGIES & LIKES ---
    {
      levelId: "4",
      title: "Allergies & Likes",
      questions: [
        { id: "5-4-1", type: "intro", word: "Ich mag...", translation: "I like...", content: "To express your preferences." },
        { id: "5-4-2", type: "choice", q: "How to say 'I like'?", options: ["Ich mag", "Ich möchte"], a: "Ich mag" },
        { id: "5-4-3", type: "jumble", q: "I like pizza", options: ["Pizza", "mag", "Ich"], a: "Ich mag Pizza" },
        { id: "5-4-4", type: "intro", word: "kein / keine", translation: "no / none", content: "To say you don't like something (negation for nouns)." },
        { id: "5-4-5", type: "choice", q: "I like no salad (masculine):", options: ["kein Salat", "keinen Salat"], a: "keinen Salat" },
        { id: "5-4-6", type: "jumble", q: "I like no soup", options: ["keine", "mag", "Suppe", "Ich"], a: "Ich mag keine Suppe" },
        { id: "5-4-7", type: "intro", word: "ohne", translation: "without", content: "Important for specific orders." },
        { id: "5-4-8", type: "choice", q: "What is 'without'?", options: ["ohne", "und"], a: "ohne" },
        { id: "5-4-9", type: "jumble", q: "Pizza without cheese", options: ["Käse", "ohne", "Pizza"], a: "Pizza ohne Käse" },
        { id: "5-4-10", type: "jumble", q: "I would like a salad without cheese", options: ["Salat", "Käse", "einen", "möchte", "ohne", "Ich"], a: "Ich möchte einen Salat ohne Käse" },
        { id: "5-4-11", type: "intro", word: "mit", translation: "with", content: "The opposite of 'ohne'." },
        { id: "5-4-12", type: "choice", q: "How to say 'with'?", options: ["mit", "aber"], a: "mit" },
        { id: "5-4-13", type: "jumble", q: "Coffee with water", options: ["mit", "Kaffee", "Wasser"], a: "Kaffee mit Wasser" },
        { id: "5-4-14", type: "jumble", q: "I would like a tea with water", options: ["Wasser", "möchte", "mit", "einen", "Tee", "Ich"], a: "Ich möchte einen Tee mit Wasser" },
        { id: "5-4-15", type: "intro", word: "lecker / nicht lecker", translation: "tasty / not tasty", content: "Recycling adjectives." },
        { id: "5-4-16", type: "choice", q: "The soup is not tasty:", options: ["Die Suppe ist nicht lecker", "Die Suppe ist kein lecker"], a: "Die Suppe ist nicht lecker" },
        { id: "5-4-17", type: "jumble", q: "The bread is really delicious", options: ["Brot", "lecker", "das", "wirklich", "ist"], a: "das Brot ist wirklich lecker" },
        { id: "5-4-18", type: "choice", q: "Do you like cheese?", options: ["Magst du Käse?", "Heißt du Käse?"], a: "Magst du Käse?" },
        { id: "5-4-19", type: "jumble", q: "My niece likes the soup with bread", options: ["die", "Nichte", "Suppe", "Brot", "mit", "mag", "meine"], a: "meine Nichte mag die Suppe mit Brot" },
        { id: "5-4-20", type: "boss", q: "Final: I like the pizza but without salad", options: ["Ich mag die Pizza aber ohne Salat", "Ich mag der Pizza aber ohne Salat"], a: "Ich mag die Pizza aber ohne Salat" }
      ]
    },

    // --- LEVEL 5: FINAL BOSS: ORDERING ---
    {
      levelId: "5",
      title: "Final Boss: Ordering",
      questions: [
        { id: "5-5-1", type: "intro", word: "die Rechnung", translation: "the bill / check", content: "How to finish your meal." },
        { id: "5-5-2", type: "choice", q: "How to ask for the bill?", options: ["Die Rechnung, bitte!", "Guten Tag, bitte!"], a: "Die Rechnung, bitte!" },
        { id: "5-5-3", type: "jumble", q: "The bill please", options: ["bitte", "Rechnung", "Die"], a: "Die Rechnung bitte" },
        { id: "5-5-4", type: "intro", word: "zahlen", translation: "to pay", content: "Use this to tell the waiter you are ready." },
        { id: "5-5-5", type: "choice", q: "How to say 'to pay'?", options: ["zahlen", "bestellen"], a: "zahlen" },
        { id: "5-5-6", type: "jumble", q: "I would like to pay", options: ["möchte", "zahlen", "Ich"], a: "Ich möchte zahlen" },
        { id: "5-5-7", type: "intro", word: "zusammen / getrennt", translation: "together / separate", content: "How will you pay? 'Zusammen' or 'Getrennt'?" },
        { id: "5-5-8", type: "choice", q: "Pay 'together'?", options: ["zusammen", "getrennt"], a: "zusammen" },
        { id: "5-5-9", type: "jumble", q: "We would like to pay together", options: ["möchten", "zusammen", "Wir", "zahlen"], a: "Wir möchten zusammen zahlen" },
        { id: "5-5-10", type: "intro", word: "Wir möchten...", translation: "We would like...", content: "Plural of 'Ich möchte'." },
        { id: "5-5-11", type: "jumble", q: "We would like a pizza", options: ["möchten", "Pizza", "eine", "Wir"], a: "Wir möchten eine Pizza" },
        { id: "5-5-12", type: "intro", word: "bereit", translation: "ready", content: "Are you 'bereit' to order?" },
        { id: "5-5-13", type: "choice", q: "Are you ready?", options: ["Bist du bereit?", "Bist du lecker?"], a: "Bist du bereit?" },
        { id: "5-5-14", type: "jumble", q: "Everything is ready", options: ["bereit", "ist", "alles"], a: "alles ist bereit" },
        { id: "5-5-15", type: "intro", word: "stimmt so", translation: "keep the change", content: "Polite phrase for tipping." },
        { id: "5-5-16", type: "jumble", q: "Thanks keep the change", options: ["so", "Danke", "stimmt"], a: "Danke stimmt so" },
        { id: "5-5-17", type: "choice", q: "Is 'die Rechnung' feminine?", options: ["Yes", "No"], a: "Yes" },
        { id: "5-5-18", type: "jumble", q: "Excuse me I would like the bill", options: ["möchte", "Ich", "Rechnung", "die", "Entschuldigung"], a: "Entschuldigung Ich möchte die Rechnung" },
        { id: "5-5-19", type: "choice", q: "Say 'Goodbye' to the waiter:", options: ["Auf Wiedersehen", "Willkommen"], a: "Auf Wiedersehen" },
        { id: "5-5-20", type: "boss", q: "Final: Good evening, we would like to order please", options: ["Guten Abend, wir möchten bitte bestellen", "Guten Morgen, wir möchte bitte bestellen"], a: "Guten Abend, wir möchten bitte bestellen" }
      ]
    }
  ]
}]