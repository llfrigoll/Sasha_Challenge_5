// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  //Creates html element that stores athlete data
  const createHtml = (athlete) => {
    //Deconstructs the athlete object into 4 parts
    const {firstName, surname, id, races} = athlete
    //Deconstructs the object of the last race into 2 parts
    const {date, time} = races.reverse()[0];
  
    //Creates a document fragment to store details
    const fragment = document.createDocumentFragment();
  
    //Creates h2 element and sets its textContent to the athlete's id and appends it to the fragment
    let title = document.createElement("h2");
    title.textContent = id;
    fragment.appendChild(title);
  
    //Creates a dl
    let list = document.createElement("dl");
  
    //Grabs the day, month and year from date
    const d = new Date(date)
    const day = d.getDate();
    const month = MONTHS[d.getMonth()];
    const year = d.getFullYear();
  
    //Deconstructs the time array into 4 numbers and adds them
    const [first, second, third, fourth] = time;
    let totalMinutes = first + second + third + fourth;
  
    //Uses trunc() to get the hour value, stores it as a string and adds padstart to it
    let hours = Math.trunc(totalMinutes / 60)
    hours = hours.toString()
    hours = hours.padStart(2, "0")

    //Uses modular to get the total minutes, stores it as a string and adds padstart to it
    let minutes = totalMinutes % 60
    minutes = minutes.toString()
    minutes = minutes.padStart(2, "0")
  
    //Adds innerHTML to add the relevant information to the list
    list.innerHTML = `
      <dt>Athlete:</dt>
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races:</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest):</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest):</dt>
      <dd>${hours}:${minutes}</dd>
    `;
  
    //Appends list to the fragment and returns the fragment
    fragment.appendChild(list);
    return fragment
  }
  
  //Deconstructs the innerdata object into the 2 athletes
  const {NM372, SV782} = data.response.data

  //Grabs the section element of each athlete and uses the deconstructed objects as arguments
  //to run the createHtml function and append it to each element
  document.querySelector("#NM372").appendChild(createHtml(NM372));
  document.querySelector("#SV782").appendChild(createHtml(SV782));