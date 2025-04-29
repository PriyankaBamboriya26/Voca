# Voca – Voice Recognition Website
Voca is a smart voice recognition website that lets users control and interact with web pages using their voice. From navigating pages to filling out forms, searching, and even chatting with a voice-enabled chatbot, Voca is built to make the web more accessible and interactive — just by speaking.

Browser Compatibility Note:
Currently, Voca works best on Microsoft Edge.
Some features use the webkitSpeechRecognition API, which may have limited support in other browsers like Chrome or Firefox.


# 1. How to Set Up and Run the Project
You can run Voca directly in your browser. No installations or backend setup needed.

Just open Voca.html with Microsoft Edge.

Right-click → Open with → Microsoft Edge

Now you’re ready to use Voca!

# 2. Technologies & Dependencies
Voca is built with vanilla web technologies and browser-native APIs. No frameworks or external libraries are required.

1. Technologies Used:
HTML5 – Structure

CSS3 – Styling

JavaScript (ES6) – Interactivity and logic

2. APIs Used (Detailed)
  1. SpeechRecognition / webkitSpeechRecognition
    Used to convert speech into text in real-time.

    Part of the Web Speech API.

    Listens to user’s microphone input.

    Returns transcribed text for navigation, form filling, and chatbot input.

    Supported primarily in Chrome and Edge (but best tested in Edge for full compatibility).

  2. SpeechSynthesisUtterance
    Used to convert text into speech (text-to-speech).

    Enables the chatbot to speak responses back to the user.

    Also used for reading confirmation messages or instructions aloud.

  3. Gemini API (by Google)
    Used for generating intelligent chatbot responses based on user queries.

    Accepts text input (converted from speech).

    Returns context-aware responses using natural language generation (NLG).

    These responses are then spoken using SpeechSynthesisUtterance.

    Gemini brings conversational AI power to Voca’s chatbot, making it smarter and more human-like.



# 3. Features
   1. Voice Navigation
    What it does:
    Allows users to control website navigation by speaking commands out loud.

    How it works:
    When you say commands like:

    "Go to Home"

    "Open About Section"

    "Scroll down"

    The system uses SpeechRecognition to capture the voice, converts it into text, then uses JavaScript to identify which section or element to navigate to. This makes browsing smoother and hands-free.


    2. Voice Form Filling
    What it does:
    Lets users fill out input fields like name, email, or message using their voice instead of typing.

    How it works:
    You simply speak your input:

    "Name Priyanka"

    "Email priyanka@example.com"
    Voca detects the spoken command, extracts the field name and value, and populates the correct input field automatically.


    3. Speak-to-Search
    What it does:
    Performs a search operation on the site using spoken input.

    How it works:
    You say something like:

    "open youtube"

    "open song"
    The speech input is transcribed and used to filter content, highlight relevant sections, or fetch dynamic results.


    4. Voice Chatbot (Powered by Gemini API)
    What it does:
    An AI-powered chatbot that listens to your voice questions, processes them using Google's Gemini API, and replies in natural speech.

    How it works:

    You speak your question (e.g., “What is AI?”)

    The speech is converted to text using SpeechRecognition

    The text is sent to the Gemini API, which generates a smart, relevant answer

    The response is read aloud using SpeechSynthesisUtterance


