import React from 'react';

const RoutineCheckups = () => {
  return (
    <div className="relative flex justify-around items-center h-screen p-6 bg-cover bg-center">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://img.freepik.com/free-photo/stethoscope-medical-mask_23-2148533025.jpg?t=st=1730033729~exp=1730037329~hmac=24c50b157cad5df206ed1c30008eb513c3830fdc58092b76c0f03c35b65ded8e&w=740)', // Replace with your actual image URL
          backgroundPosition: 'center 10%', // Adjusts vertical position
          transform: 'scaleY(-1)', // Flips the background image vertically
          zIndex: -1 // Places the background behind the other content
        }} 
      />

      {/* Transparent Overlay */}
      <div 
        className="absolute inset-0 bg-black opacity-30" // Adjust opacity as needed
        style={{
          zIndex: -1, // Keeps the overlay behind other content
        }}
      />

      {/* Column 1 */}
      <div className="flex flex-col items-center justify-between w-1/4 h-[500px] bg-[#d4cab1] text-[#5b5f3e] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <button className="w-full py-4 rounded-full bg-[#5b5f3e] text-[#d4cab1] text-lg hover:bg-[#8b8964] transition-colors duration-200">First Visit</button>
        <div className="arrow-container">
          <div className="arrow" />
        </div>
        <button className="w-full py-4 rounded-full bg-[#5b5f3e] text-[#d4cab1] text-lg hover:bg-[#8b8964] transition-colors duration-200">19-20 Weeks</button>
        <div className="arrow-container">
          <div className="arrow" />
        </div>
        <button className="w-full py-4 rounded-full bg-[#5b5f3e] text-[#d4cab1] text-lg hover:bg-[#8b8964] transition-colors duration-200">22 Weeks</button>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col items-center justify-between w-1/4 h-[500px] bg-[#d4cab1] text-[#5b5f3e] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <button className="w-full py-4 rounded-full bg-[#5b5f3e] text-[#d4cab1] text-lg hover:bg-[#8b8964] transition-colors duration-200">26-27 Weeks</button>
        <div className="arrow-container">
          <div className="arrow" />
        </div>
        <button className="w-full py-4 rounded-full bg-[#5b5f3e] text-[#d4cab1] text-lg hover:bg-[#8b8964] transition-colors duration-200">28 Weeks</button>
        <div className="arrow-container">
          <div className="arrow" />
        </div>
        <button className="w-full py-4 rounded-full bg-[#5b5f3e] text-[#d4cab1] text-lg hover:bg-[#8b8964] transition-colors duration-200">32 Weeks</button>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col items-center justify-between w-1/4 h-[500px] bg-[#d4cab1] text-[#5b5f3e] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <button className="w-full py-4 rounded-full bg-[#5b5f3e] text-[#d4cab1] text-lg hover:bg-[#8b8964] transition-colors duration-200">34-36 Weeks</button>
        <div className="arrow-container">
          <div className="arrow" />
        </div>
        <button className="w-full py-4 rounded-full bg-[#5b5f3e] text-[#d4cab1] text-lg hover:bg-[#8b8964] transition-colors duration-200">38-39 Weeks</button>
        <div className="arrow-container">
          <div className="arrow" />
        </div>
        <button className="w-full py-4 rounded-full bg-[#5b5f3e] text-[#d4cab1] text-lg hover:bg-[#8b8964] transition-colors duration-200">40-41 Weeks</button>
      </div>

      <style jsx>{`
        .arrow-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .arrow {
          width: 2px; /* Width of the vertical line */
          height: 100px; /* Length of the line (adjusted as necessary) */
          background-color: #5b5f3e; /* Color of the line */
          position: relative; /* Positioning for the arrowhead */
          margin-bottom: 5px; /* Space between arrow and button below */
        }

        .arrow::after {
          content: '';
          position: absolute;
          top: 100%; /* Position at the bottom of the line */
          left: -8.5px; /* Adjust this to center the arrowhead */
          width: 0;
          height: 0;
          border-left: 10px solid transparent; /* Left side of the arrow */
          border-right: 10px solid transparent; /* Right side of the arrow */
          border-top: 10px solid #5b5f3e; /* Color of the arrowhead */
          margin-top: -2px; /* Adjust to align the arrowhead properly with the line */
        }
      `}</style>
    </div>
  );
};

export default RoutineCheckups;
