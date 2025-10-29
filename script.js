function fetchUsersAndSummarize() {
  const userUrl = "https://jsonplaceholder.typicode.com/users";
  fetch(userUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed, Status code: ${response.status}`);
      }
      console.log(response);
      return response.json();
    })
    .then((users) => {
      users
        .filter((user) => user.address.city.indexOf("S") === 0)
        .map((user) => ({
          id: user.id,
          name: user.name,
          companyName: user.company.name,
        }))
        .forEach((user) =>
          console.log(
            `User ID ${user.id}: ${user.name} works at ${user.companyName}`
          )
        );
    })
    .catch((error) => {
      console.error(`Error fetching or processing users: ${error.message}`);
    });
}

// Successful fetch demonstration
fetchUsersAndSummarize();

// Failure demonstration using an invalid endpoint
function testError() {
  fetch("https://jsonplaceholder.typicode.com/u5ers")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed! Status code: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.error("TestError Catch Block:", error.message)
    );
}

// Check error handling
testError();
