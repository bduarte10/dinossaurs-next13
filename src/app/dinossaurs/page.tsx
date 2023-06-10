
import DinoList from "../components/dinoList"

async function getData() {
  const res = await fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  const data = await getData()

 
  return (
    <main className="my-4">
     <DinoList dinossaurs={data}  />
    </main>)
}
