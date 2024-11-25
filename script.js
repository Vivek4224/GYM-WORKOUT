document.addEventListener("DOMContentLoaded", function () {
  // You can add more interactivity here, such as starting a timer or more details on each exercise.
  console.log("Page Loaded!");
});

document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
  const daysInMonth = 30; // Set to 30 days for simplicity
  const today = new Date();
  const currentMonth = today.getMonth(); // Current month number (0-11)

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Add the weekday names (Sun, Mon, Tue, etc.)
  for (let i = 0; i < dayNames.length; i++) {
    const dayNameDiv = document.createElement("div");
    dayNameDiv.classList.add("day-name");
    dayNameDiv.textContent = dayNames[i];
    calendar.appendChild(dayNameDiv);
  }

  // Get the first day of the month (0-6, Sunday-Saturday)
  const firstDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  ).getDay();

  // Add empty divs before the first day to align correctly
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyDiv = document.createElement("div");
    calendar.appendChild(emptyDiv);
  }

  // Generate calendar days dynamically
  for (let i = 1; i <= daysInMonth; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.textContent = i;

    // Create checkbox for each day
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.id = `day-${i}`;

    // Load previously checked status if available (using localStorage for demo purposes)
    if (localStorage.getItem(`day-${i}`) === "checked") {
      checkbox.checked = true;
      dayDiv.classList.add("done");
    }

    // Add event listener to update status on checkbox change
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        dayDiv.classList.add("done");
        dayDiv.classList.remove("not-done");
        localStorage.setItem(`day-${i}`, "checked"); // Save checkbox state
      } else {
        dayDiv.classList.remove("done");
        dayDiv.classList.add("not-done");
        localStorage.removeItem(`day-${i}`); // Remove checkbox state
      }
    });

    dayDiv.appendChild(checkbox);

    // If the day is today, highlight it differently
    if (i === today.getDate()) {
      dayDiv.style.border = "3px solid #333";
    }

    // Append the day to the calendar
    calendar.appendChild(dayDiv);
  }
});
