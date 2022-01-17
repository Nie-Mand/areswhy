import Navbar from '../components/Navbar'
import Month from '../components/Month'
import data from '../data'

export default function Home() {
  return (
    <div>
      <div className="bg-[#06020c] min-h-screen ">
        <main className="min-h-screen">
          <Navbar />

          <Month
            data={data.january.data}
            title={data.january.title}
            intro={data.january.intro}
          />
        </main>

        <main className="bg-white min-h-screen">
          <Month
            data={data.february.data}
            title={data.february.title}
            intro={data.february.intro}
            light
          />
        </main>
      </div>
    </div>
  )
}
