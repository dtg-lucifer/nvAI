import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Key_features_Cards from "../components/Key_features_Cards";
import Pricing_Cards from "../components/Pricing_Cards";
import Chatbot from "../components/ChatBot";

function Homepage() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      {/* <Hamburger /> */}

      {/* Hero Section and Key Features */}
      <div className="w-full h-[2200px] md:h-[1550px] bg-gray-900 flex-col justify-center relative pt-10">
        <div className="w-52 h-52 rounded-full bg-white/30 absolute duration-500 skew-x-12 md:-skew-x-12 top-[5%] md:top-[10%] left-[21%] -z-1"></div>

        <div className="w-full h-[300px] flex justify-center items-center font-['Merriweather'] pt-52 px-2 md:px-0">
          <span className="text-4xl md:text-5xl text-white text-center md:leading-relaxed font-semibold">
            Revolutionizing Brain Tumour <br /> Detection
          </span>
        </div>

        <div className="w-full h-[50px] flex justify-center items-center font-['Poppins'] px-12 mt-12 md:mt-4 md:pt-6">
          <span className="text-white text-sm md:text-md text-center">
            Cutting Edge AI Technologies for accurate Diagnosis!
          </span>
        </div>

        <div className="w-full h-[100px] flex justify-center items-center font-['Popping'] pt-10 relative">
          <a
            href="#key_features"
            className="text-black text-xl font-semibold px-4 py-3 bg-white hover:bg-blue-600 hover:text-white duration-300 hover:duration-300 rounded-lg font-['Poppins']"
          >
            Learn More
          </a>
          <div className="w-64 h-64 rounded-full -skew-y-6 bg-white/30 absolute right-[20%] -z-1"></div>
        </div>

        <div
          id="key_features"
          className="w-full h-[30px] flex justify-center items-center text-center text-white font-['Poppins'] mt-52"
        >
          FEATURES
        </div>

        <div className="w-full h-[30px] flex justify-center items-center text-center text-white text-4xl font-semibold font-['Jersey'] mt-4 relative">
          <div className="w-60 h-60 skew-x-12 rounded-full bg-white/30 absolute top-4 left-[25%] -z-1"></div>
          <span>Key Features</span>
        </div>

        <div className="w-full h-[30px] flex justify-center items-center text-center text-white font-['Poppins'] mt-14">
          Discover the features that set us apart in brain tumour detection.
        </div>

        <div className="w-full md:h-[600px] flex justify-center mt-10">
          <div className="w-[900px] h-full flex flex-wrap justify-center gap-[50px] px-2 md:px-0">
            <Key_features_Cards
              title="Advance AI Technology"
              info="Our cutting-edge Technology uses State-Of-The-Art Deep Learning Models to detect brain tumours in MRI scans."
            />
            <Key_features_Cards
              title="Fast & Accurate Results"
              info="Get Quick and Accurate Results to aid in early detection and treatment planning."
            />
            <Key_features_Cards
              title="Expert Medical Analysis"
              info="Our platform is supported by experienced medical professionals for in-depth analysis."
            />
            <Key_features_Cards
              title="Secure Data Handling"
              info="We priorise your privacy and ensure your data is securely handled with utmost care."
            />
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="w-full h-[2200px] min-[1110px]:h-[900px] md:h-[1600px] bg-gray-900 flex-col justify-center relative pt-20">
        <div className="w-full h-[30px] flex justify-center items-center text-center text-white text-4xl font-semibold font-['Jersey'] mt-4 relative">
          <div className="w-60 h-60 -skew-x-12 rounded-full bg-white/30 absolute top-4 right-[25%] -z-1"></div>
          <span>Choose Your Plan</span>
        </div>

        <div className="w-full h-[30px] flex justify-center items-center text-center text-white font-['Poppins'] mt-14">
          Select the plan that suits your brain tumour detection needs.
        </div>

        <div className="w-full md:h-[600px] flex justify-center mt-10">
          <div className="w-[1200px] h-full flex flex-wrap justify-center gap-[30px] px-2 md:px-0">
            <Pricing_Cards
              tier="FREE"
              info="Get started with basic brain tumour detection."
              price="0"
              tier_features={[
                "Access to Basic MRI Scan Analysis.",
                "Limited report generation",
                "Email Support",
              ]}
              button_content="Continue For Free"
              button_color="transparent"
            />

              <div className="w-60 h-60 skew-x-12 rounded-full bg-white/30 absolute bottom-0 left-[30%] -z-5 hidden"></div>

            <Pricing_Cards
              tier="BASIC"
              info="Enhanced Features for accurate brain tumour detection."
              price="29"
              tier_features={[
                "All features of Free plan",
                "Advance MRI scan analysis",
                "Detailed report generation",
                "24/7 email and phone support",
                "Monthly Webinar Access",
              ]}
              button_content="Try the Basic Plan"
              button_color="transparent"
            />

            <Pricing_Cards
              tier="PRO"
              info="Comprehensive solution for advance brain tumour analysis."
              price="59"
              tier_features={[
                "All features of Free plan",
                "AI Powered MRI analysis",
                "Customizable report templates",
                "AI assistant for personal doubts",
                "One on One doctor consultation",
                "Access to research studies",
              ]}
              button_content="Try the Pro Plan"
              button_color="transparent"
            />
          </div>
        </div>
      </div>
      
      {/* Gyan ki baat Section */}
      <div className="w-full h-[600px] bg-gray-900 flex-col space-y-10 justify-center relative pt-20">
        <div className="w-full h-[30px] flex justify-center items-center text-center text-white text-4xl font-semibold font-['Jersey'] mt-4 relative">
          <div className="w-60 h-60 -skew-x-12 rounded-full bg-white/30 absolute top-4 right-[25%] -z-1"></div>
          
          <span>Advance MRI Image Analysis</span>
        </div>

        <div className="w-full h-[30px] flex justify-center items-center text-center text-white font-['Poppins'] mt-14">

          <div className="w-[1000px] h-10">
            <span className="text-center">
              Our Project utilizes state-of-the-art Artificial Intelligence Algorithms to analyse MRI scans, provide you with proper segmentation of brain tumours and generate detailed reports. With a Team of experts of both medical imaging and AI, we are able to provide you with accurate results.
            </span>
          </div>
        </div>

        <div className="w-full h-32 pt-20 flex justify-center">
          <button className="w-[300px] text-white bg-white/30 text-center border py-2 rounded">Discover Our Technology</button>
        </div>

      </div>

      {/* Commonly Asked Questions Section */}
      <div className="w-full h-[700px] bg-black"></div>
      
      <Chatbot />

      <Footer />
    </div>
  );
}

export default Homepage;
