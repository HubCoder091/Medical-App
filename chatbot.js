// Predefined medical responses using keyword matching, including remedies
const medicalResponses = [
    { keywords: ["fever", "high temperature"], response: "A fever is a sign your body is fighting an infection. Drink plenty of fluids and rest. If it persists, consult a doctor.", remedy: "Remedy: Take paracetamol for relief." },
    { keywords: ["covid", "symptoms of covid"], response: "COVID-19 symptoms include fever, cough, shortness of breath, and loss of taste or smell. Seek medical advice if symptoms worsen.", remedy: "Remedy: Rest and hydration are crucial." },
    { keywords: ["cold", "common cold", "treat cold"], response: "For a cold, rest, drink fluids, and use over-the-counter medications. If symptoms persist, consult a healthcare provider.", remedy: "Remedy: Warm salt water gargle can soothe your throat." },
    { keywords: ["insomnia", "sleep problems"], response: "Insomnia is difficulty falling or staying asleep. Good sleep hygiene and relaxation techniques can help. Consult a doctor if it persists.", remedy: "Remedy: Try chamomile tea before bed." },
    { keywords: ["diabetes"], response: "Diabetes is a chronic condition that affects how your body processes sugar (glucose). Treatment includes lifestyle changes and medications like insulin.", remedy: "Remedy: A balanced diet and regular exercise are key." },
    { keywords: ["anxiety"], response: "Anxiety is a feeling of worry or fear. Therapy and medication can help. Practice mindfulness and relaxation techniques.", remedy: "Remedy: Deep breathing exercises can be beneficial." },
    { keywords: ["depression"], response: "Depression is a mood disorder that affects your feelings, thoughts, and actions. It's treatable with therapy and medication.", remedy: "Remedy: Regular exercise and talking to someone can help." },
    { keywords: ["headache", "migraine"], response: "Headaches can have many causes, including tension and dehydration. Rest in a quiet place and stay hydrated.", remedy: "Remedy: Apply a cold pack to your forehead for relief." },
    { keywords: ["back pain"], response: "Back pain can be caused by various factors, including strain or injury. Good posture and stretching can help.", remedy: "Remedy: Apply heat or ice to the affected area." },
    { keywords: ["stomach ache", "abdominal pain"], response: "Stomach aches can result from various causes, including indigestion or stress. Monitor your diet and hydration.", remedy: "Remedy: Ginger tea can soothe stomach discomfort." },
    { keywords: ["allergy", "allergic reaction"], response: "Allergies can cause sneezing, itching, and other symptoms. Avoid triggers and consider antihistamines.", remedy: "Remedy: Use a saline nasal rinse for relief." },
    { keywords: ["asthma"], response: "Asthma is a condition that affects your airways. Medication and avoiding triggers are essential for management.", remedy: "Remedy: Use a peak flow meter to monitor your condition." },
    { keywords: ["arthritis"], response: "Arthritis causes inflammation and pain in the joints. Treatment may include medication and physical therapy.", remedy: "Remedy: Gentle exercises can help maintain joint function." },
    { keywords: ["eczema", "skin rash"], response: "Eczema is a condition that makes your skin red and itchy. Moisturizers and topical medications can help.", remedy: "Remedy: Apply coconut oil to soothe dry skin." },
    { keywords: ["psoriasis"], response: "Psoriasis is a skin disease that causes red, itchy scaly patches. Treatment includes topical therapies and systemic medications.", remedy: "Remedy: Moisturizers and topical steroids can reduce flare-ups." },
    { keywords: ["hypertension", "high blood pressure"], response: "Hypertension can lead to serious health issues. Lifestyle changes and medications can help manage it.", remedy: "Remedy: Reducing salt intake can lower blood pressure." },
    { keywords: ["hypotension", "low blood pressure"], response: "Hypotension can cause dizziness and fainting. Staying hydrated and eating small meals can help.", remedy: "Remedy: Drink salty fluids to increase blood volume." },
    { keywords: ["cancer"], response: "Cancer treatment varies depending on the type. Early detection and treatment are crucial.", remedy: "Remedy: A healthy diet and exercise can support overall health." },
    { keywords: ["migraine", "severe headache"], response: "Migraines are intense headaches often accompanied by nausea and sensitivity to light. Triggers vary by individual.", remedy: "Remedy: Keep a headache diary to identify triggers." },
    { keywords: ["gout"], response: "Gout is a form of arthritis caused by excess uric acid. It can cause sudden, severe pain in joints.", remedy: "Remedy: Cherries may help reduce uric acid levels." },
    { keywords: ["chickenpox"], response: "Chickenpox is a highly contagious disease characterized by an itchy rash and flu-like symptoms. Vaccination is key for prevention.", remedy: "Remedy: Calamine lotion can relieve itching." },
    { keywords: ["whooping cough", "pertussis"], response: "Whooping cough is a highly contagious respiratory disease known for uncontrollable, violent coughing. Vaccination is essential.", remedy: "Remedy: Honey can soothe the throat (for those over 1 year)." },
    { keywords: ["hepatitis"], response: "Hepatitis is an inflammation of the liver, often caused by a viral infection. Treatment depends on the type.", remedy: "Remedy: Maintain a healthy diet and avoid alcohol." },
    { keywords: ["influenza", "flu"], response: "Influenza is a viral infection that affects the respiratory system. Vaccination is recommended.", remedy: "Remedy: Rest and fluids are crucial for recovery." },
    { keywords: ["throat infection", "sore throat"], response: "Sore throats can be caused by infections or allergies. Gargling salt water can provide relief.", remedy: "Remedy: Warm fluids can help soothe irritation." },
    { keywords: ["conjunctivitis", "pink eye"], response: "Conjunctivitis is inflammation of the eye's outer membrane. It can be viral or bacterial.", remedy: "Remedy: Warm compresses can relieve discomfort." },
    { keywords: ["pneumonia"], response: "Pneumonia is an infection that inflames air sacs in one or both lungs. Seek medical attention if symptoms worsen.", remedy: "Remedy: Rest and stay hydrated." },
    { keywords: ["tuberculosis", "TB"], response: "Tuberculosis is a serious bacterial infection that primarily affects the lungs. Treatment involves a long course of antibiotics.", remedy: "Remedy: Complete the entire course of antibiotics." },
    { keywords: ["kidney stones"], response: "Kidney stones are hard deposits made of minerals and salts that form inside your kidneys. Stay hydrated to prevent them.", remedy: "Remedy: Lemon juice may help break down stones." },
    { keywords: ["irritable bowel syndrome", "IBS"], response: "IBS is a common disorder affecting the large intestine. Treatment focuses on diet and lifestyle changes.", remedy: "Remedy: High-fiber foods can help manage symptoms." },
    { keywords: ["hemorrhoids"], response: "Hemorrhoids are swollen veins in the lower rectum and anus. They can be caused by straining during bowel movements.", remedy: "Remedy: Warm sitz baths can provide relief." },
    { keywords: ["ulcer", "stomach ulcer"], response: "Stomach ulcers are open sores on the lining of the stomach. Medications can help heal them.", remedy: "Remedy: Avoid spicy foods and caffeine." },
    { keywords: ["liver disease"], response: "Liver disease can result from various factors, including alcohol and viruses. Regular check-ups are essential.", remedy: "Remedy: Maintain a healthy diet and avoid alcohol." },
    { keywords: ["thyroid disorder", "hypothyroidism", "hyperthyroidism"], response: "Thyroid disorders affect metabolism and energy levels. Treatment includes medications and lifestyle changes.", remedy: "Remedy: Regular check-ups are important." },
    { keywords: ["anemia"], response: "Anemia is a condition where you lack enough healthy red blood cells. Treatment depends on the cause.", remedy: "Remedy: Iron-rich foods like spinach can help." },
    { keywords: ["scabies"], response: "Scabies is a skin condition caused by a tiny mite. It causes itching and a rash. Treatment includes medicated creams.", remedy: "Remedy: Wash bedding and clothing in hot water." },
    { keywords: ["ringworm"], response: "Ringworm is a fungal infection that causes a ring-shaped rash. Antifungal medications are effective.", remedy: "Remedy: Keep the affected area clean and dry." },
    { keywords: ["athlete's foot"], response: "Athlete's foot is a fungal infection affecting the skin on the feet. Antifungal treatments can help.", remedy: "Remedy: Keep feet dry and use antifungal powder." },
    { keywords: ["hives", "urticaria"], response: "Hives are raised, itchy welts on the skin, often caused by an allergic reaction. Antihistamines can help.", remedy: "Remedy: Avoid known triggers." },
    { keywords: ["food poisoning"], response: "Food poisoning can occur after eating contaminated food. Hydration is key for recovery.", remedy: "Remedy: Stay hydrated and rest." },
    { keywords: ["constipation"], response: "Constipation is when bowel movements are infrequent or difficult. Increasing fiber intake can help.", remedy: "Remedy: Drink plenty of water." },
    { keywords: ["diarrhea"], response: "Diarrhea is characterized by loose or watery stools. Stay hydrated and rest.", remedy: "Remedy: BRAT diet (bananas, rice, applesauce, toast) can help." },
    { keywords: ["nausea", "vomiting"], response: "Nausea can result from various causes. Ginger tea can help alleviate symptoms.", remedy: "Remedy: Stay hydrated and eat bland foods." },
    { keywords: ["pms", "premenstrual syndrome"], response: "PMS includes emotional and physical symptoms before menstruation. Lifestyle changes can help.", remedy: "Remedy: Regular exercise may alleviate symptoms." },
    { keywords: ["menopause"], response: "Menopause marks the end of menstruation. Symptoms vary, and treatments include lifestyle changes and medications.", remedy: "Remedy: Stay active and eat a balanced diet." },
    { keywords: ["prostate problems"], response: "Prostate problems can affect urinary function. Regular check-ups are essential.", remedy: "Remedy: Stay hydrated and limit caffeine." },
    { keywords: ["testicular pain"], response: "Testicular pain can have various causes and should be evaluated by a doctor.", remedy: "Remedy: Rest and avoid strenuous activities." },
    { keywords: ["chronic fatigue syndrome"], response: "Chronic fatigue syndrome causes extreme fatigue that doesn't improve with rest. Treatment focuses on symptom relief.", remedy: "Remedy: Establish a regular sleep routine." },
    { keywords: ["fatigue"], response: "Fatigue can result from various factors, including sleep deprivation. A healthy lifestyle can help.", remedy: "Remedy: Ensure adequate sleep and nutrition." },
    { keywords: ["obesity"], response: "Obesity increases the risk of various health conditions. A balanced diet and exercise are key for management.", remedy: "Remedy: Consider portion control and regular physical activity." },
    { keywords: ["gallstones"], response: "Gallstones are hardened deposits in the gallbladder. Treatment varies depending on symptoms.", remedy: "Remedy: A high-fiber diet may help prevent them." },
    { keywords: ["celiac disease"], response: "Celiac disease is an autoimmune disorder triggered by gluten. A strict gluten-free diet is essential.", remedy: "Remedy: Read labels carefully and avoid gluten." },
    { keywords: ["lactose intolerance"], response: "Lactose intolerance is the inability to digest lactose, a sugar found in milk. Lactose-free products can help.", remedy: "Remedy: Lactase supplements may assist with digestion." },
    { keywords: ["fibromyalgia"], response: "Fibromyalgia causes widespread musculoskeletal pain and fatigue. Treatment includes medications and therapy.", remedy: "Remedy: Gentle exercise can improve symptoms." },
    { keywords: ["sciatica"], response: "Sciatica causes pain along the sciatic nerve, often due to a herniated disc. Stretching and physical therapy can help.", remedy: "Remedy: Heat packs can relieve discomfort." },
    { keywords: ["carpal tunnel syndrome"], response: "Carpal tunnel syndrome is caused by pressure on the median nerve in the wrist. Wrist braces can help.", remedy: "Remedy: Regular breaks from repetitive tasks are essential." },
    { keywords: ["tendonitis"], response: "Tendonitis is inflammation of a tendon. Rest and ice can help manage symptoms.", remedy: "Remedy: Gradual stretching and strengthening can aid recovery." },
    { keywords: ["sprain", "strain"], response: "Sprains and strains are common injuries that can cause pain and swelling. Rest and ice are recommended.", remedy: "Remedy: Compression and elevation can help reduce swelling." },
    { keywords: ["fracture"], response: "A fracture is a break in a bone. Medical evaluation is necessary for treatment.", remedy: "Remedy: Follow medical advice for recovery." },
    { keywords: ["burn", "burn injury"], response: "Burns can range from mild to severe. Treatment depends on the severity.", remedy: "Remedy: Cool the burn under running water for 10-20 minutes." },
    { keywords: ["fainting", "syncope"], response: "Fainting can be caused by various factors, including dehydration and low blood sugar. Seek medical attention if it happens frequently.", remedy: "Remedy: Stay hydrated and avoid sudden changes in position." },
    { keywords: ["panic attack"], response: "Panic attacks involve sudden feelings of intense fear. Breathing exercises and grounding techniques can help.", remedy: "Remedy: Practice mindfulness and deep breathing." },
    { keywords: ["PTSD", "post-traumatic stress disorder"], response: "PTSD can occur after experiencing or witnessing a traumatic event. Therapy and support are essential.", remedy: "Remedy: Consider joining a support group." },
    { keywords: ["bipolar disorder"], response: "Bipolar disorder causes extreme mood swings. Treatment includes medications and therapy.", remedy: "Remedy: Regular check-ins with a mental health professional are important." },
    { keywords: ["schizophrenia"], response: "Schizophrenia is a serious mental disorder that affects how a person thinks, feels, and behaves. Treatment includes medications and therapy.", remedy: "Remedy: Supportive therapy can be beneficial." },
    { keywords: ["OCD", "obsessive-compulsive disorder"], response: "OCD involves unwanted, repetitive thoughts and behaviors. Therapy and medication can help manage symptoms.", remedy: "Remedy: Cognitive-behavioral therapy can be effective." },
    { keywords: ["ADHD", "attention-deficit/hyperactivity disorder"], response: "ADHD affects focus and self-control. Treatment often includes therapy and medication.", remedy: "Remedy: Structure and routine can help manage symptoms." },
    { keywords: ["autism"], response: "Autism is a developmental disorder affecting communication and behavior. Early intervention can be beneficial.", remedy: "Remedy: Supportive therapies can enhance skills." },
    { keywords: ["dementia"], response: "Dementia is a decline in cognitive function. Supportive care is crucial for management.", remedy: "Remedy: Engage in mental exercises to stimulate brain function." },
    { keywords: ["Alzheimer's disease"], response: "Alzheimer's is a progressive disease affecting memory and thinking skills. Early diagnosis and supportive care are key.", remedy: "Remedy: Maintain a routine to help with memory." },
    { keywords: ["cognitive decline"], response: "Cognitive decline can occur with age or disease. Mental exercises and a healthy lifestyle can support brain health.", remedy: "Remedy: Stay socially active and engaged." },
    { keywords: ["sleep apnea"], response: "Sleep apnea is a sleep disorder characterized by pauses in breathing during sleep. Treatment may include lifestyle changes or devices.", remedy: "Remedy: Maintain a healthy weight and avoid alcohol." },
    { keywords: ["snoring"], response: "Snoring can result from various factors, including sleep position and nasal congestion. Lifestyle changes can help.", remedy: "Remedy: Sleep on your side to reduce snoring." },
    { keywords: ["restless legs syndrome"], response: "Restless legs syndrome causes an uncontrollable urge to move the legs. Treatment focuses on symptom relief.", remedy: "Remedy: Stretching before bed can help alleviate symptoms." },
    { keywords: ["seizure", "epilepsy"], response: "Epilepsy is a neurological disorder characterized by recurrent seizures. Treatment includes medication and lifestyle management.", remedy: "Remedy: Keep a seizure diary to track triggers." },
    { keywords: ["multiple sclerosis", "MS"], response: "Multiple sclerosis is an autoimmune disease affecting the central nervous system. Treatment includes medications and therapies.", remedy: "Remedy: Stay active and maintain a healthy diet." },
    { keywords: ["Parkinson's disease"], response: "Parkinson's is a neurodegenerative disorder that affects movement. Treatment includes medications and therapy.", remedy: "Remedy: Regular exercise can improve mobility." },
    { keywords: ["cerebral palsy"], response: "Cerebral palsy affects muscle coordination and movement. Treatment focuses on improving function and mobility.", remedy: "Remedy: Physical therapy can enhance mobility." },
    { keywords: ["down syndrome"], response: "Down syndrome is a genetic disorder that affects physical and intellectual development. Supportive therapies can improve quality of life.", remedy: "Remedy: Early intervention programs can be beneficial." },
    { keywords: ["spinal cord injury"], response: "Spinal cord injuries can cause paralysis and loss of sensation. Treatment includes rehabilitation and supportive care.", remedy: "Remedy: Follow rehabilitation guidelines for recovery." },
    { keywords: ["acne"], response: "Acne is a common skin condition that occurs when hair follicles become clogged. Treatment includes topical and oral medications.", remedy: "Remedy: Keep the skin clean and avoid touching the face." },
    { keywords: ["rosacea"], response: "Rosacea is a chronic skin condition that causes redness and visible blood vessels on the face. Avoid triggers and consider topical treatments.", remedy: "Remedy: Use sunscreen daily to protect the skin." },
    { keywords: ["vitiligo"], response: "Vitiligo causes loss of skin color in patches. Treatment options vary and may include topical medications.", remedy: "Remedy: Sun protection is essential for affected areas." },
    { keywords: ["wound care"], response: "Proper wound care is crucial for healing. Clean the wound and keep it covered.", remedy: "Remedy: Change dressings regularly and keep the area clean." },
    { keywords: ["fracture healing"], response: "Fracture healing can take time. Follow your doctor's advice for recovery.", remedy: "Remedy: Ensure adequate calcium and vitamin D intake." },
    { keywords: ["chronic pain"], response: "Chronic pain persists over time and can affect quality of life. Treatment focuses on managing pain.", remedy: "Remedy: Mindfulness and relaxation techniques can help." },
    { keywords: ["cough", "dry cough"], response: "Coughing can be caused by various factors, including infections and allergies. Stay hydrated and consider cough suppressants.", remedy: "Remedy: Honey can soothe a dry throat." },
    { keywords: ["sneeze"], response: "Sneezing can result from allergies or irritants. Avoid triggers and consider antihistamines.", remedy: "Remedy: Use a saline nasal spray for relief." },
    { keywords: ["lump", "bump"], response: "Any new lump or bump should be evaluated by a healthcare professional.", remedy: "Remedy: Monitor for changes and seek medical advice." },
    { keywords: ["choking"], response: "Choking is a medical emergency that requires immediate action. Perform the Heimlich maneuver if necessary.", remedy: "Remedy: Avoid talking or laughing while eating." },
    { keywords: ["skin infection"], response: "Skin infections can result from bacteria, fungi, or viruses. Treatment may include antibiotics.", remedy: "Remedy: Keep the area clean and dry." },
    { keywords: ["herpes"], response: "Herpes is a common viral infection causing sores. Antiviral medications can help manage outbreaks.", remedy: "Remedy: Avoid intimate contact during an outbreak." },
    { keywords: ["warts"], response: "Warts are benign growths caused by the human papillomavirus. Treatment includes over-the-counter remedies or freezing.", remedy: "Remedy: Avoid picking at warts to prevent spreading." },
    { keywords: ["athlete's foot"], response: "Athlete's foot is a fungal infection that can be itchy and painful. Antifungal creams can help.", remedy: "Remedy: Keep feet clean and dry." },
    { keywords: ["viral infection"], response: "Viral infections can cause various symptoms. Rest and hydration are key for recovery.", remedy: "Remedy: Antiviral medications may be necessary for some infections." },
    { keywords: ["bacterial infection"], response: "Bacterial infections often require antibiotics for treatment. Seek medical advice if symptoms worsen.", remedy: "Remedy: Follow the prescribed antibiotic regimen." },
    { keywords: ["feeling dizzy"], response: "Dizziness can result from various factors. Sit or lie down until it passes, and stay hydrated.", remedy: "Remedy: Avoid sudden movements." },
    { keywords: ["feeling faint"], response: "Feeling faint can be a sign of low blood pressure or dehydration. Sit or lie down and rest.", remedy: "Remedy: Drink water or electrolyte solutions." },
    { keywords: ["heartburn"], response: "Heartburn is caused by acid reflux. Antacids can provide relief.", remedy: "Remedy: Avoid large meals and spicy foods." },
    { keywords: ["indigestion"], response: "Indigestion can cause discomfort after eating. Smaller meals and avoiding triggers can help.", remedy: "Remedy: Ginger tea may alleviate symptoms." },
    { keywords: ["chest pain"], response: "Chest pain should be evaluated by a healthcare professional to rule out serious conditions.", remedy: "Remedy: Seek immediate medical attention if pain is severe." },
    { keywords: ["palpitations"], response: "Palpitations are irregular heartbeats that can be caused by stress or anxiety. Consult a doctor if persistent.", remedy: "Remedy: Practice relaxation techniques." },
    { keywords: ["hormonal imbalance"], response: "Hormonal imbalances can cause various symptoms. Treatment varies depending on the cause.", remedy: "Remedy: Maintain a balanced diet and exercise." },
    { keywords: ["menstrual cramps"], response: "Menstrual cramps can cause discomfort during menstruation. Over-the-counter pain relievers can help.", remedy: "Remedy: Heat pads can soothe cramps." },
    { keywords: ["vasectomy", "tubal ligation"], response: "Vasectomy and tubal ligation are permanent forms of contraception. Consult a doctor for more information.", remedy: "Remedy: Follow post-procedure care instructions." },
    { keywords: ["sexually transmitted infection", "STI"], response: "STIs can cause various symptoms. Regular testing and safe practices are essential.", remedy: "Remedy: Use protection during intimate contact." },
    { keywords: ["fertility problems"], response: "Fertility issues can have various causes. Consult a healthcare professional for evaluation and options.", remedy: "Remedy: Maintain a healthy lifestyle and avoid toxins." },
    { keywords: ["pregnancy", "expecting"], response: "Pregnancy involves various changes. Regular prenatal care is crucial for a healthy pregnancy.", remedy: "Remedy: Take prenatal vitamins as recommended." },
    { keywords: ["menstrual irregularities"], response: "Menstrual irregularities can result from hormonal changes. Consult a healthcare professional for evaluation.", remedy: "Remedy: Keep a menstrual diary to track patterns." },
    { keywords: ["migraines", "chronic migraines"], response: "Chronic migraines require management strategies. Keep a headache diary and consult a doctor.", remedy: "Remedy: Identify and avoid triggers." },
    { keywords: ["sleeping problems"], response: "Sleeping problems can arise from stress or lifestyle. Good sleep hygiene is essential.", remedy: "Remedy: Establish a relaxing bedtime routine." },
    { keywords: ["burnout", "stress"], response: "Burnout and stress can affect mental and physical health. Managing stress is crucial.", remedy: "Remedy: Take regular breaks and practice self-care." },
    { keywords: ["self-care"], response: "Self-care is essential for mental and physical well-being. Regular check-ins with yourself are important.", remedy: "Remedy: Schedule time for activities you enjoy." },
];

// List of random doctor names
const doctorNames = [
    "Dr. Smith", "Dr. Johnson", "Dr. Williams", "Dr. Jones", "Dr. Brown",
    "Dr. Davis", "Dr. Miller", "Dr. Wilson", "Dr. Moore", "Dr. Taylor",
    "Dr. Anderson", "Dr. Thomas", "Dr. Jackson", "Dr. White", "Dr. Harris",
    "Dr. Martin", "Dr. Thompson", "Dr. Garcia", "Dr. Martinez", "Dr. Robinson",
    "Dr. Clark", "Dr. Rodriguez", "Dr. Lewis", "Dr. Lee", "Dr. Walker",
    "Dr. Hall", "Dr. Allen", "Dr. Young", "Dr. King", "Dr. Wright",
    "Dr. Scott", "Dr. Torres", "Dr. Nguyen", "Dr. Hill", "Dr. Flores",
    "Dr. Green", "Dr. Adams", "Dr. Nelson", "Dr. Baker", "Dr. Gonzalez",
    "Dr. Mitchell", "Dr. Perez", "Dr. Roberts", "Dr. Turner", "Dr. Phillips",
];

// Function to handle user input and generate responses
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    if (userInput === "") return; // Ignore empty inputs

    displayMessage(userInput, "user");

    // Greeting responses
    if (["hi", "hello", "hey"].includes(userInput)) {
        displayMessage("Hello! How can I assist you today?", "bot");
        document.getElementById("user-input").value = ""; // Clear input
        return;
    }

    // Specific response for appreciation phrases
    if (["thanks", "thank you", "great", "nice", "work", "good"].some(phrase => userInput.includes(phrase.toLowerCase()))) {
        displayMessage("Have a great day 😊! Feel free to ask anything", "bot");
        document.getElementById("user-input").value = ""; // Clear input
        return;
    }

    // Check if user is asking to book an appointment
    if (userInput.includes("book") && userInput.includes("appointment")) {
        const doctorName = getRandomDoctorName();
        setTimeout(() => {
            displayMessage(`Booking an appointment with Dr. ${doctorName}. Booking confirmed ✅ You can contact: 9789265578 to ask for timing.`, "bot");
        }, 500);
        document.getElementById("user-input").value = ""; // Clear input
        return;
    }

    // Check for remedy requests
    if (userInput.includes("remedy for")) {
        const condition = userInput.split("remedy for")[1].trim(); // Extract the condition
        const response = getRemedyResponse(condition);
        setTimeout(() => {
            displayMessage(response, "bot");
            document.getElementById("user-input").value = ""; // Clear input
        }, 500);
        return;
    }

    // Get bot response based on keyword matching
    const response = getBotResponse(userInput);
    setTimeout(() => {
        displayMessage(response, "bot");
        document.getElementById("user-input").value = ""; // Clear input
    }, 500); // Simulate a short delay for the bot response
}

function displayMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", `${sender}-message`);
    messageElement.innerText = text;

    const chatBox = document.getElementById("chat-box");
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

function getBotResponse(userInput) {
    // Check for matching keywords
    for (let item of medicalResponses) {
        for (let keyword of item.keywords) {
            if (userInput.includes(keyword)) {
                return item.response;
            }
        }
    }
    return "Sorry, I don't have an answer for that. Please consult a medical professional.";
}

function getRemedyResponse(condition) {
    // Check for matching keywords in the medical responses for remedies
    for (let item of medicalResponses) {
        if (item.keywords.some(keyword => condition.includes(keyword))) {
            return item.remedy;
        }
    }
    return "Sorry, I don't have a remedy for that condition in my database.";
}

function getRandomDoctorName() {
    const randomIndex = Math.floor(Math.random() * doctorNames.length);
    return doctorNames[randomIndex]; // Return a random doctor name
}

