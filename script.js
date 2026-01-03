const terminal = document.querySelector(".terminal");
const output = document.getElementById("output");
const input = document.getElementById("commandInput");

/* ================= OUTPUT ================= */

function blankLine() {
    const div = document.createElement("div");
    div.innerHTML = "&nbsp;";   // safe here
    div.style.marginBottom = "6px";
    output.appendChild(div);
}


function print(text = "") {
    const lines = text.split("\n");

    lines.forEach(line => {
            const div = document.createElement("div");
            div.textContent = line;
            div.style.marginBottom = "6px";
            output.appendChild(div);
            });

    terminal.scrollTop = terminal.scrollHeight;
}

function printProject(project){
    project.text.forEach(line => {
                if (line === null) blankLine();
                else print(line);
                });
    printLink(project.link.label, project.link.url);
    blankLine();
}

function printContactInfo(info) {
  info.forEach(({ key, value }) => {
    const div = document.createElement("div");

    // normal prefix text (not underlined)
    const prefix = document.createElement("span");
    prefix.textContent = `-> ${key}:    `;

    // clickable value only
    const a = document.createElement("a");
    a.textContent = value;
    a.style.color = "inherit";
    a.style.textDecoration = "underline";
    a.style.cursor = "pointer";

    if (key === "Email") {
      a.href = `mailto:${value}`;
    }
    else if (key === "Phone") {
      const phoneNumber = value.replace(/\D/g, "");
      a.href = `https://wa.me/${phoneNumber}`;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }

    div.appendChild(prefix);
    div.appendChild(a);
    div.style.marginBottom = "6px";
    output.appendChild(div);
  });

  terminal.scrollTop = terminal.scrollHeight;
}


function printLink(label, url) {
    const div = document.createElement("div");

    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = `${url.replace(/^https?:\/\//, "")}`;

    /* terminal-style hyperlink */
    a.style.color = "inherit";
    a.style.textDecoration = "underline";
    a.style.cursor = "pointer";

    div.append(`${label}`)
        div.appendChild(a);
    div.style.marginBottom = "6px";
    output.appendChild(div);

    terminal.scrollTop = terminal.scrollHeight;
}

function clearScreen() {
    output.innerHTML = "";
}

/* ================= RESUME DOWNLOAD ================= */

function downloadResume() {
    const link = document.createElement("a");
    link.href = "assets/RESUME_SACHIN_YADAV.pdf";
    link.download = "RESUME_SACHIN_YADAV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/* ================= COMMANDS ================= */

const commands = {
help: [
      "-> Available commands:",
      " -  help:        show this help",
      " -  whoami:      about me",
      " -  skills:      technical skills",
      " -  experience:  work experience",
      " -  projects:    few projects",
      " -  education:   education details",
      " -  resume:      download resume (PDF)",
      " -  socials:     social profiles & contact info",
      " -  clear:       clear the screen",
      null
],

whoami: [
  "Sachin Yadav [R&D Engineer @ Tejas Networks]",
  "I design and maintain resource-constrained, performance-critical C/C++ systems on embedded Linux.",
  null
],

skills: [
    "-> Systems & OS: C, C++, Embedded Linux, Linux system programming, processes, signals, IPC, daemons, service lifecycle",
"-> Application Development: Python, JavaScript, Node.js, Express.js, REST APIs, React.js, Next.js",
"-> Infrastructure & Tooling: Docker, Docker Compose, CI/CD (GitHub Actions), Nginx, VPS hosting, Git",
"-> Data, Debugging & Utilities: MySQL, Linux CLI, Bash scripting, gdb, logging",
null
],

experience: [
"-> Tejas Networks — R&D Engineer [Gurugram, India] [July 2025 – Present]",

" -  Design and implement performance-critical C/C++ components for GPON access network software on embedded Linux platforms.",
" -  Develop new functionality and extend existing system modules within the access network stack.",
" -  Debug and maintain Linux daemons, working with IPC mechanisms, process lifecycle, and service orchestration.",
" -  Analyze runtime behavior and memory usage to improve reliability, stability, and fault recovery.",
" -  Perform root-cause analysis of system-level issues using gdb and Linux logging tools.",
null,
"-> Tejas Networks — R&D Intern [Bengaluru, India]  [Jan 2025 – July 2025]",
" -  Worked on telecom access network software and device-level system components.",
" -  Automated network device test cases using Python and internal frameworks to improve coverage.",
" -  Used Spirent traffic generators to validate behavior under load and fault scenarios.",
" -  Built understanding of hardware–software interaction in telecom-grade systems.",
null,
"-> Realty Experts Group — SDE Intern [Remote] [Jan 2025 – July 2025]",
" -  Developed and maintained backend services for a production web platform.",
" -  Containerized services using Docker and automated deployments via CI/CD pipelines.",
" -  Configured Nginx reverse proxy and SSL for secure service exposure on VPS infrastructure.",
null
],

projects: [

{
text: [
          "-> InLoop — Real-time Code Editor [Multiuser collaborative system]",
      " -  Designed a real-time synchronization system enabling concurrent code editing using WebSockets.",
      " -  Implemented server-side coordination logic using Node.js and Socket.IO.",
      " -  Focused on state consistency, concurrency handling, and low-latency updates.",
],
    link: { label: " -  source: ", url: "https://github.com/sachin3145/realtime-code-editor" },
},
{
text: [
          "-> Simple File-Backed Entry Manager [Persistent storage system]",
      " -  Built a file-backed C application with in-memory operations and persistence.",
      " -  Abstracted stdio and POSIX file I/O behind a common interface.",
      " -  Designed modular components for entry handling and logging.",
],
    link: { label: " -  source: ", url: "https://github.com/sachin3145/file-handling" },
}
],

education: [
    "-> USICT, GGSIPU | New Delhi | B.Tech (CSE) | CGPA: 9.15 | 2021–2025",
    "-> Bloom Public School | New Delhi | Class XII | CBSE | 94.6% | 2020-2021",
    "-> Bloom Public School | New Delhi | Class X   | CBSE | 95.2% | 2018-2019",
    null
],
socials: {
links: [
{ label: "-> GitHub:   ",   url: "https://github.com/sachin3145" },
{ label: "-> LinkedIn: ", url: "https://linkedin.com/in/sachin3145" },
],

contactInfo: [
    {key: "Email", value: "sachiny8376@gmail.com"},
    {key: "Phone", value: "+91 8376996179"}
]
}
};

/* ================= HISTORY ================= */

let history = [];
let historyIndex = 0;

/* ================= TAB COMPLETION ================= */

let tabState = {
active: false,
        prefix: "",
        matches: [],
        index: 0
};

/* ================= BOOT ================= */

print("Welcome.");
print("Type 'help' to list commands.");
print("");

/* ================= INPUT HANDLER ================= */

input.addEventListener("keydown", (e) => {
        const value = input.value.trim();

        /* ENTER */
        if (e.key === "Enter") {
        print(`sachin@linux:~$ ${value}`);

        if (value === "clear") {
        clearScreen();
        }
        else if (value === "resume") {
        print("Downloading resume...");
        downloadResume();
        }
        else if (value === "socials") {
        printContactInfo(commands.socials.contactInfo);
        commands.socials.links.forEach(link =>
                printLink(link.label, link.url)
                );
        blankLine();
        }
        else if (value === "projects"){
            commands.projects.forEach(printProject);
        }
        else if (commands[value]) {
        commands[value].forEach(line => {
                if (line === null) blankLine();
                else print(line);
                });


        }
        else if (value !== "") {
            print("command not found. try 'help'");
        }


        if (value !== "") {
            history.push(value);
            historyIndex = history.length;
        }

        input.value = "";
        tabState.active = false
        return;
        }

        /* CTRL + L */
        if (e.ctrlKey && e.key.toLowerCase() === "l") {
            e.preventDefault();
            clearScreen();
            return;
        }

        /* ARROW UP */
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = history[historyIndex];
            }
            return;
        }

        /* ARROW DOWN */
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex < history.length - 1) {
                historyIndex++;
                input.value = history[historyIndex];
            } else {
                historyIndex = history.length;
                input.value = "";
            }
            return;
        }

        /* TAB COMPLETION */
        if (e.key === "Tab") {
            e.preventDefault();

            if (!tabState.active) {
                tabState.prefix = input.value;
                tabState.matches = Object.keys(commands)
                    .concat("resume", "clear")
                    .filter(cmd => cmd.startsWith(tabState.prefix));
                tabState.index = 0;
                tabState.active = true;
            }

            if (tabState.matches.length === 0) return;

            input.value = tabState.matches[tabState.index];
            tabState.index =
                (tabState.index + 1) % tabState.matches.length;

            return;
        }

        /* RESET TAB STATE ON TYPING */
        if (
                e.key.length === 1 ||
                e.key === "Backspace" ||
                e.key === "Delete"
           ) {
            tabState.active = false;
        }
});

/* KEEP FOCUS LIKE A TERMINAL */
document.addEventListener("click", () => input.focus());

