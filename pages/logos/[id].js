
//i have commented this because i choose to use a dropdown instead of a modal


// // Import the required styles from the module
// import Styles from "../../styles/Home.module.css";
// import { useState } from "react";
// // Define paths for dynamic routes using fetched data
// export const getStaticPaths = async () => {
//   // Fetch user data from an API
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();

//   // Create an array of paths for each user
//   const paths = data.map((eachList) => {
//     const { id } = eachList;
//     return {
//       params: { id: id.toString() },
//     };
//   });

//   // Return the paths along with the fallback setting
//   return {
//     paths,
//     fallback: false,
//   };
// };

// // Fetch specific user data based on the dynamic route parameter
// export const getStaticProps = async ({ params }) => {
//   // Fetch the user data based on the id from the dynamic route
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${params.id}`
//   );
//   const list = await response.json();

//   // Return the fetched user data as props
//   return {
//     props: {
//       list,
//     },
//   };
// };

// // Component to display user details
// const Details = ({ list }) => {
//   // Destructure the user details from the props
//    const { id, name, email, address } = list;

//    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//    const toggleDropdown = () => {
//      setIsDropdownOpen(!isDropdownOpen);
//    };

//   return (
//     <div className={Styles.container}>
//       <div className={Styles.detailsContainer}>
//         {/* Display user name and a button to toggle the dropdown */}
//         <div className={Styles.userNameContainer}>
//           <p>
//             <span>Name:</span> {name}
//           </p>
//           <button onClick={toggleDropdown}>
//             {isDropdownOpen ? "Close Details" : "Show Details"}
//           </button>
//         </div>
        
//         {/* Dropdown content */}
//         {isDropdownOpen && (
//           <div className={Styles.dropdownContent}>
//             <p>
//               <span>Email:</span> {email}
//             </p>
//             <p>
//               <span>City:</span> {address.city}
//             </p>
//             <p>
//               <span>Phone:</span> (+49) {list.phone}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );

// };

// // Export the Details component as the default export
// export default Details;
