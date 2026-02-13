export const generateDate = () => {
	return new Date(Date.now())
		.toDateString()
		.split(" ")
		.slice(2, 4)
		.join("th -, ")
		.replace("-", new Date(Date.now()).toDateString().split(" ")[1]);
};

export const getMonthDate = (date) => {
	return new Date(date).toDateString().split(" ").splice(1, 2).join(" ");
};

// simple date formate MM/DD/YYYY
export const simpleDate = (date) => {
	return new Intl.DateTimeFormat("en-US", {
		month: "2-digit",
		day: "2-digit",
		year: "numeric",
	}).format(new Date(date));
};
