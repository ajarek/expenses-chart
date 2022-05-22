let progress = document.querySelectorAll(
  ".progress"
) as NodeListOf<HTMLElement>;

async function getData(): Promise<void> {
  const response = await fetch("./data.json");
  const data = await response.json();
  data.forEach((element: any) => {
    let procent = element.amount;
    let dayWeek = element.day;
    progress.forEach((el) => {
      if (el.id === dayWeek) {
        el.style.height = `${procent}%`;
      }
    });
  });
}
getData();
