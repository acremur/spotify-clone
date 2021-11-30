import { getProviders, signIn } from 'next-auth/react'

const login = ({ providers }) => {    
    return (
        <div className='bg-black flex flex-col min-h-screen w-full items-center justify-center'>
            <img 
                src="https://links.papareact.com/9xl" 
                alt="spotify-logo" 
                className="w-52 mb-5" 
            />
            {Object.values(providers).map(provider => (
                <div key={provider.id}>
                    <button 
                        className='bg-[#18d860] text-white p-5 rounded-lg'
                        onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                    >Login with {provider.name}</button>
                </div>
            ))}
        </div>
    )
}

export default login

export async function getServerSideProps() {
    const providers = await getProviders()

    return {
        props: {
            providers
        }
    }
}