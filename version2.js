// Using async/await version
const fetchUsersAndSummarize = async () => {
  const userUrl = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(userUrl);

    if (!response.ok) {
      throw new Error(`Request failed, Status code: ${response.status}`);
    }

    console.log(response);

    const users = await response.json();

    const filteredUsers = users
      .filter((user) => user.address.city.indexOf("S") === 0)
      .map((user) => ({
        id: user.id,
        name: user.name,
        companyName: user.company.name,
      }));

    filteredUsers.forEach((user) =>
      console.log(
        `User ID ${user.id}: ${user.name} works at ${user.companyName}`
      )
    );
  } catch (error) {
    console.error(`Error fetching or processing users: ${error.message}`);
  }
};

// Demonstrating successful fetch
fetchUsersAndSummarize();


// Demonstrating failure using async/await version
const testError = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/u5ers");

    if (!response.ok) {
      throw new Error(`Request failed! Status code: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`TestError Catch Block: ${error.message}`);
  }
};

// Check error handling
testError();
