/* modal */
class Modal {
	constructor() {
		this.dialog = document.querySelector("#dialog");
		this.closeBtns = this.dialog.querySelectorAll("[data-close]");
		this.bindEvents.bind(this)();
	}
	bindEvents() {
		this.closeBtns.forEach((btn) => {
			btn.addEventListener("click", () => {
				this.closeDialog();
			});
		});
	}
	openDialog() {
		this.dialog.showModal();
		this.dialog.classList.remove("animate-fadeOut");
		this.dialog.classList.add("animate-fadeIn");

		document.body.style = "overflow-y: hidden;";
	}
	updateDialog(data) {
		const projectName = document.querySelector("dialog .projectName");
		const subheading = document.querySelector("dialog .subheading");
		const img = document.querySelector("dialog img");
		const desc = document.querySelector("dialog .desc");
		const client = document.querySelector("dialog .client");
		const category = document.querySelector("dialog .category");

		projectName.textContent = data.projectName;
		subheading.textContent = data.subheading;
		img.setAttribute("src", data.imgSrc);
		desc.textContent = data.desc;
		client.textContent = data.client;
		category.textContent = data.category;
		console.log(projectName, subheading, img, desc, client, category);
	}
	closeDialog() {
		this.dialog.classList.remove("animate-fadeIn");
		this.dialog.classList.add("animate-fadeOut");
		setTimeout(() => {
			this.dialog.close();
			document.body.style = "overflow-y: scroll;";
		}, 200);
	}
}

/* menu */
const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
	const menu = document.querySelector("#menu");
	if (menu.hasAttribute("data-active")) {
		menu.removeAttribute("data-active");
		menu.setAttribute("data-idle", "");
	} else {
		menu.setAttribute("data-active", "");
		menu.removeAttribute("data-idle");
	}
}
/* nav shrink */
const nav = document.querySelector("nav#nav");
window.addEventListener("scroll", () => {
	if (window.scrollY == 0) {
		nav.removeAttribute("data-shrink");
	} else {
		nav.setAttribute("data-shrink", "");
	}
});
/* portfolio gallery */

const portfolioData = [
	{
		projectName: "project name",
		subheading: "lorem ipsum dolor sit amet consectetur.",
		desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
		imgSrc: "./assets/img/portfolio/1.jpg",
		client: "threads",
		category: "illustration",
	},
	{
		projectName: "project name",
		subheading: "lorem ipsum dolor sit amet consectetur.",
		desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
		imgSrc: "./assets/img/portfolio/2.jpg",
		client: "explore",
		category: "graphic design",
	},
	{
		projectName: "project name",
		subheading: "lorem ipsum dolor sit amet consectetur.",
		desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
		imgSrc: "./assets/img/portfolio/3.jpg",
		client: "finish",
		category: "identity",
	},
	{
		projectName: "project name",
		subheading: "lorem ipsum dolor sit amet consectetur.",
		desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
		imgSrc: "./assets/img/portfolio/4.jpg",
		client: "lines",
		category: "branding",
	},
	{
		projectName: "project name",
		subheading: "lorem ipsum dolor sit amet consectetur.",
		desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
		imgSrc: "./assets/img/portfolio/5.jpg",
		client: "southwest",
		category: "website design",
	},
	{
		projectName: "project name",
		subheading: "lorem ipsum dolor sit amet consectetur.",
		desc: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
		imgSrc: "./assets/img/portfolio/6.jpg",
		client: "window",
		category: "photography",
	},
];
class Portfolio {
	constructor(initialData) {
		this.data = initialData;
		this.modal = new Modal();
	}
	render() {
		const portfolioGrid = document.querySelector("#portfolioGrid");
		portfolioGrid.innerHTML = "";
		for (const obj of portfolioData) {
			const card = this.buildCard(obj);
			card.addEventListener("click", (e) => {
				const target = e.target.closest("[data-target]");
				if (!target) return;
				this.modal.updateDialog(obj);
				this.modal.openDialog();
			});
			portfolioGrid.appendChild(card);
		}
	}
	buildCard({ imgSrc, client, category }) {
		const div = document.createElement("div");
		div.className = "bg-white";
		div.innerHTML = `
		<div class="relative">
			<div data-target class="absolute grid place-items-center bg-primary/80 z-10 inset-0 opacity-0 duration-200 cursor-pointer hover:opacity-100">
				<i class="fa-solid fa-plus text-6xl text-white"></i>
			</div>
			<div>
				<img
					src=${imgSrc}
					alt=${client}
					class="object-cover object-center"
				/>
			</div>
		</div>
		<hgroup class="text-center py-6">
			<h3 class="font-bold text-xl capitalize">${client}</h3>
			<p class="font-serif italic capitalize">${category}</p>
		</hgroup>
		`;
		return div;
	}
}
const portfolio = new Portfolio(portfolioData);
portfolio.render();

/* about */
const timelineData = [
	{
		imgSrc: "./assets/img/about/1.jpg",
		dateInfo: "2009-2011",
		label: "our humble beginnings",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas optio, ipsam dolorum enim nihil nemo sunt sit modi odio doloribus vero, voluptatibus ullam.",
	},
	{
		imgSrc: "./assets/img/about/2.jpg",
		dateInfo: "march 2011",
		label: "an agency is born",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas optio, ipsam dolorum enim nihil nemo sunt sit modi odio doloribus vero, voluptatibus ullam.",
	},
	{
		imgSrc: "./assets/img/about/3.jpg",
		dateInfo: "december 2015",
		label: "transition to full service",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas optio, ipsam dolorum enim nihil nemo sunt sit modi odio doloribus vero, voluptatibus ullam.",
	},
	{
		imgSrc: "./assets/img/about/4.jpg",
		dateInfo: "july 2020",
		label: "phase two expansion",
		content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptas optio, ipsam dolorum enim nihil nemo sunt sit modi odio doloribus vero, voluptatibus ullam.",
	},
];
class About {
	constructor(initialData) {
		this.data = initialData;
	}
	render() {
		const timeline = document.querySelector("#timeline");
		timeline.innerHTML = "";
		for (let i = 0; i < this.data.length; i++) {
			const obj = this.data[i];
			const timelineCard = this.buildCard({ i, ...obj });
			timeline.appendChild(timelineCard);
		}
		const end = this.buildEnding();
		timeline.appendChild(end);
	}
	buildEnding() {
		const div = document.createElement("div");
		div.className = "relative grid grid-rows-1 grid-cols-[90px_1fr] gap-4 lg:gap-10 lg:grid-cols-[1fr_150px_1fr] items-start";
		div.innerHTML = `
		<div class="relative grid place-items-center z-10 row-start-1 col-start-1 lg:col-start-2 lg:col-span-1 rounded-full overflow-hidden border-8 border-slate-200 bg-primary aspect-square text-white text-center font-bold capitalize text-xs lg:text-base">
			be part<br>of our<br>story!
		</div>`;
		return div;
	}
	buildCard({ i: index, imgSrc, dateInfo, label, content }) {
		const div = document.createElement("div");
		div.className = "relative grid grid-rows-1 grid-cols-[90px_1fr] gap-4 lg:gap-10 lg:grid-cols-[1fr_150px_1fr] items-start pb-12 lg:pb-28";
		if (index % 2 === 0) {
			div.innerHTML = `
			<!-- line -->
						<div class="absolute bg-slate-200 w-0.5 h-full left-11 lg:left-1/2 lg:-translate-x-1/2"></div>
						<div class="text-start lg:text-end space-y-2 col-start-2 lg:col-start-1 col-span-1 row-start-1">
							<div class="space-y-1">
								<div class="subhead text-zinc-800 font-bold tracking-widest capitalize">${dateInfo}</div>
								<h3 class="font-bold tracking-widest text-xl capitalize">${label}</h3>
							</div>
							<p class="text-start lg:text-end">
								${content}
							</p>
						</div>
						<div class="relative z-10 row-start-1 col-start-1 lg:col-start-2 lg:col-span-1 rounded-full overflow-hidden border-8 border-slate-200">
							<img
								src=${imgSrc}
								alt=""
								class="object-cover object-center w-full h-full"
							/>
						</div>
			`;
		} else {
			div.innerHTML = `
			<!-- line -->
			<div class="absolute bg-slate-200 w-0.5 h-full left-11 lg:left-1/2 lg:-translate-x-1/2"></div>
			<div class="text-start lg:text-start space-y-2 col-start-2 lg:col-start-3 col-span-1 row-start-1">
				<div class="space-y-1">
					<div class="subhead text-zinc-800 font-bold tracking-widest capitalize">${dateInfo}</div>
					<h3 class="font-bold tracking-widest text-xl capitalize">${label}</h3>
				</div>
				<p class="text-start lg:text-start">
					${content}
				</p>
			</div>
			<div class="relative z-10 row-start-1 col-start-1 lg:col-start-2 lg:col-span-1 rounded-full overflow-hidden border-8 border-slate-200">
				<img
					src=${imgSrc}
					alt=""
					class="object-cover object-center w-full h-full"
				/>
			</div>
			`;
		}
		return div;
	}
}
const about = new About(timelineData);
about.render();
