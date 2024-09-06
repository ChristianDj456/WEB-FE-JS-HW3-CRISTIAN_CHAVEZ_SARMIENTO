function runFirstExample() {
    document.getElementById('output1').classList.remove('hidden');

    document.getElementById('output1').innerText = ''; // Clear the previous output

    // Display the concept of asynchronous execution
    document.getElementById('output1').innerText += 'Starting execution\n';

    // The following code runs asynchronously
    setTimeout(() => {
        document.getElementById('output1').innerText += 'Asynchronous Task Completed (after 2 seconds)\n';
    }, 2000);

    document.getElementById('output1').innerText += 'The code continues to execute without waiting for the asynchronous task\n';
}

function runSecondExample() {
    document.getElementById('output2').classList.remove('hidden');

    document.getElementById('output2').innerText = ''; // Clear the previous output

    // Function that simulates fetching data from an API (with a 1-second delay)
    function fetchData(callback) {
        document.getElementById('output2').innerText += 'Fetching data from the API...\n';

        // We simulate an asynchronous operation that takes 1 second
        setTimeout(() => {
            const data = 'Data fetched: { "user": "Cristian", "age": 20 }';
            callback(data);
        }, 1000);
    }

    // Function to display the data
    function displayData(data) {
        document.getElementById('output2').innerText += data + '\n';
    }

    // We execute the fetchData function and use displayData as a callback
    fetchData(displayData);
}

function runThirdExample() {
    document.getElementById('output3').classList.remove('hidden');

    document.getElementById('output3').innerText = ''; // Clear the previous output

    // We simulate an asynchronous operation with promises
    function fetchDataPromise() {
        return new Promise((resolve, reject) => {
            document.getElementById('output3').innerText += 'Fetching data (Promise)...\n';
            
            setTimeout(() => {
                const success = true; // We simulate a successful response
                if (success) {
                    resolve('Data fetched: { "product": "Laptop", "price": 1500 }');
                } else {
                    reject('Error: Failed to fetch data');
                }
            }, 2000);
        });
    }

    // We call the promise and handle the result with then and catch
    fetchDataPromise()
        .then((data) => {
            document.getElementById('output3').innerText += data + '\n';
        })
        .catch((error) => {
            document.getElementById('output3').innerText += error + '\n';
        });
}

function runFourthExample() {
    document.getElementById('output4').classList.remove('hidden');

    document.getElementById('output4').innerText = ''; // Clear the previous output

    // We simulate an asynchronous operation with async/await
    async function fetchDataWithAsyncAwait() {
        document.getElementById('output4').innerText += 'Fetching data with async/await...\n';

        try {
            // We simulate a delay in fetching the data
            const data = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    const success = true; // We simulate a successful response
                    if (success) {
                        resolve('Data fetched: { "product": "Smartphone", "price": 1000 }');
                    } else {
                        reject('Error: Failed to fetch data');
                    }
                }, 2000);
            });

            document.getElementById('output4').innerText += data + '\n'; // Display the fetched data

        } catch (error) {
            document.getElementById('output4').innerText += error + '\n'; // Handle the error
        }
    }

    // Execute the function that uses async/await
    fetchDataWithAsyncAwait();
}


function runFifthExample() {
    document.getElementById('output5').classList.remove('hidden');
    
    // Clear the previous output
    document.getElementById('output5').innerText = '';

    // Display the result of the code
    document.getElementById('output5').innerText += '// Output:\n';

    // Execute the code to show the real result
    console.log('Start');
    document.getElementById('output5').innerText += 'Start\n';

    setTimeout(() => {
        console.log('Inside Timeout');
        document.getElementById('output5').innerText += 'Inside Timeout (processed later by the event loop)\n';
    }, 0);

    console.log('End');
    document.getElementById('output5').innerText += 'End\n';
}
