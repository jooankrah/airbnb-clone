import Head from 'next/head'
import ExtraLargeCard from '../components/ExtraLargeCard'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import LargeCard from '../components/LargeCard'
import SmallCard from '../components/SmallCard'

export default function Home() {

  const exploredata = [1,2,3,4,5,6,7,8,9,10,11,12]


  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/images/Airbnb_icon.svg" />
      </Head>

      <Header/>
      <HomeHero/>
      <main className="max-w-[1760px] mx-auto px-8 sm:px-16">
        <section className="pt-6">
          {/**explore nearby */}
          <h2 className="text-3xl font-bold">Explore Nearby</h2>
          {/** render items here*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">  
            {exploredata?.map((value,index)=> <SmallCard key={index}></SmallCard>) }
          </div>
        </section>
        <section className="pt-6">
          {/**live anywhere */}
          <h2 className="text-3xl font-bold">Live Anywhere</h2>
          {/**render items here */}
          <div className="my-5 flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {exploredata.map((value,index)=><LargeCard key={index}/>)}
          </div>
        </section>
        <section className="mt-16 mb-5">
          {/**xl card */}
          <ExtraLargeCard/>
        </section>
        <Footer/>
      </main>
    </div>
  )
}
