"use client"
import React, { useState } from 'react';

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState('Member');
  const [availability, setAvailability] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [sessionTime, setSessionTime] = useState('');
  const [classSchedule, setClassSchedule] = useState('');
  const [newDiscipline, setNewDiscipline] = useState('');
  const [assignMentor, setAssignMentor] = useState('');

  const handleAvailabilityChange = (e) => setAvailability(e.target.value);
  const handleDisciplineChange = (e) => setDiscipline(e.target.value);
  const handleSessionTimeChange = (e) => setSessionTime(e.target.value);
  const handleClassScheduleChange = (e) => setClassSchedule(e.target.value);
  const handleNewDisciplineChange = (e) => setNewDiscipline(e.target.value);
  const handleAssignMentorChange = (e) => setAssignMentor(e.target.value);

  // Unified submit handler for all forms
  const handleSubmit = async () => {
    let formData = {};

    // Collect data based on active tab
    switch (activeTab) {
      case 'Member':
        formData = { availability, discipline };
        break;
      case 'Mentor':
        formData = { sessionTime, classSchedule };
        break;
      case 'Club President':
        formData = { newDiscipline, assignMentor };
        break;
      default:
        return;
    }

    try {
      const response = await fetch('https://asl-smart-class-scheduling.vercel.app/Dashboard/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: activeTab, ...formData }),
      });

      if (response.ok) {
        alert('Data saved successfully!');
      } else {
        alert('Failed to save data.');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert('An error occurred while saving data.');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Member':
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Member Features</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Daily Availability</label>
                <input 
                  type="date" 
                  value={availability} 
                  onChange={handleAvailabilityChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Enroll in Discipline</label>
                <input 
                  type="text" 
                  value={discipline} 
                  onChange={handleDisciplineChange} 
                  placeholder="Enter course name" 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <button 
                onClick={handleSubmit} 
                className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>
          </div>
        );
      case 'Mentor':
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Mentor Features</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Schedule Session Time</label>
                <input 
                  type="datetime-local" 
                  value={sessionTime} 
                  onChange={handleSessionTimeChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Update Class Schedule</label>
                <input 
                  type="text" 
                  value={classSchedule} 
                  onChange={handleClassScheduleChange} 
                  placeholder="Enter new schedule details" 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <button 
                onClick={handleSubmit} 
                className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>
          </div>
        );
      case 'Club President':
        return (
          <div>
            <h2 className="text-xl font-bold mb-2">Club President Features</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Create New Discipline</label>
                <input 
                  type="text" 
                  value={newDiscipline} 
                  onChange={handleNewDisciplineChange} 
                  placeholder="Enter discipline name" 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assign Mentor to Discipline</label>
                <input 
                  type="text" 
                  value={assignMentor} 
                  onChange={handleAssignMentorChange} 
                  placeholder="Enter mentor name" 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <button 
                onClick={handleSubmit} 
                className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 w-full mx-auto pt-60 min-h-screen bg-blue-300">
      <div className="flex justify-around mb-4">
        {['Member', 'Mentor', 'Club President'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-rose-200 p-4 rounded-lg shadow-md">
        {renderContent()}
      </div>
    </div>
  );
};

export default DashboardTabs;









// "use client"
// import React, { useState } from 'react';

// const DashboardTabs = () => {
//   const [activeTab, setActiveTab] = useState('Member');
//   const [availability, setAvailability] = useState('');
//   const [discipline, setDiscipline] = useState('');
//   const [sessionTime, setSessionTime] = useState('');
//   const [classSchedule, setClassSchedule] = useState('');
//   const [newDiscipline, setNewDiscipline] = useState('');
//   const [assignMentor, setAssignMentor] = useState('');

//   const handleAvailabilityChange = (e) => setAvailability(e.target.value);
//   const handleDisciplineChange = (e) => setDiscipline(e.target.value);
//   const handleSessionTimeChange = (e) => setSessionTime(e.target.value);
//   const handleClassScheduleChange = (e) => setClassSchedule(e.target.value);
//   const handleNewDisciplineChange = (e) => setNewDiscipline(e.target.value);
//   const handleAssignMentorChange = (e) => setAssignMentor(e.target.value);

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Member':
//         return (
            
            
//           <div>
//             <h2 className="text-xl font-bold mb-2">Member Features</h2>
            
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Daily Availability</label>
//                 <input 
//                   type="date" 
//                   value={availability} 
//                   onChange={handleAvailabilityChange} 
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Enroll in Discipline</label>
//                 <input 
//                   type="text" 
//                   value={discipline} 
//                   onChange={handleDisciplineChange} 
//                   placeholder="Enter course name" 
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 />
//               </div>
//             </div>
//           </div>
//         );
//       case 'Mentor':
//         return (
//           <div>
//             <h2 className="text-xl font-bold mb-2">Mentor Features</h2>
            
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Schedule Session Time</label>
//                 <input 
//                   type="datetime-local" 
//                   value={sessionTime} 
//                   onChange={handleSessionTimeChange} 
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Update Class Schedule</label>
//                 <input 
//                   type="text" 
//                   value={classSchedule} 
//                   onChange={handleClassScheduleChange} 
//                   placeholder="Enter new schedule details" 
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 />
//               </div>
//             </div>
//           </div>
//         );
//       case 'Club President':
//         return (
//           <div>
//             <h2 className="text-xl font-bold mb-2">Club President Features</h2>
           
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Create New Discipline</label>
//                 <input 
//                   type="text" 
//                   value={newDiscipline} 
//                   onChange={handleNewDisciplineChange} 
//                   placeholder="Enter discipline name" 
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Assign Mentor to Discipline</label>
//                 <input 
//                   type="text" 
//                   value={assignMentor} 
//                   onChange={handleAssignMentorChange} 
//                   placeholder="Enter mentor name" 
//                   className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 />
//               </div>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="p-4 w-full mx-auto pt-60 min-h-screen bg-blue-300">
//       <div className="flex justify-around mb-4">
//         {['Member', 'Mentor', 'Club President'].map(tab => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-lg font-medium ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//       <div className="bg-rose-200 p-4 rounded-lg shadow-md">
//         {renderContent()}
//       </div>
//     </div>
    
    
//   );
// };

// export default DashboardTabs;
