export async function getPrograms() {
    const response = await fetch('/api/programs');
    return await response.json();
  }

  /* need to fetch into the flask application, not api */