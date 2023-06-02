import  '@styles/globals.css'
import Nav from './components/Nav'
 

export const metadata={
    title:'propmtopia',
    description:'Discover & share AI prompts'
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <provider>
            <div className='main'>
                <div className="gradient"></div>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
            </provider>
        </body>
    </html>
  )
}

export default RootLayout
