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
  
  const createHtml = (athlete) => {
    const {firstName, surname, id, races} = athlete
    const {date, time} = races.reverse()[0];
  
    const fragment = document.createDocumentFragment();
  
    let title = document.createElement("h2");
    title.textContent = id;
    fragment.appendChild(title);
  
    let list = document.createElement("dl");
  
    const d = new Date(date)
    const day = d.getDate();
    const month = MONTHS[d.getMonth()];
    const year = d.getFullYear();
  
    const [first, second, third, fourth] = time;
    let totalMinutes = first + second + third + fourth;
  
    let hours = Math.trunc(totalMinutes / 60)
    hours = hours.toString()
    hours = hours.padStart(2, "0")

    let minutes = totalMinutes % 60
    minutes = minutes.toString()
    minutes = minutes.padStart(2, "0")
  
    list.innerHTML = /* html */ `
      <dt>Athlete:</dt>
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races:</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest):</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest):</dt>
      <dd>${hours}:${minutes}</dd>
    `;
  
    fragment.appendChild(list);
    return fragment
  }
  
  const {NM372, SV782} = data.response.data
  document.querySelector("#NM372").appendChild(createHtml(NM372));
  document.querySelector("#SV782").appendChild(createHtml(SV782));