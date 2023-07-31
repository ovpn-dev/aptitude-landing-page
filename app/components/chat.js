import { Convo } from './convo'

export function Chat() {
    return (
        <div className="flex min-h-screen flex-col justify-between mt-8">
            <div className="bg-slate-800 p-3 w-[800px] rounded-md text-white">
                <h1 className="text-2xl mb-2 font-semibold">Sales Chat</h1>
                <p>You can start a conversation here or try the following examples:</p>
                <div className="flex flex-col items-start mt-4 space-y-2">
                    <button className='inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 shadow-none hover:underline h-auto p-0 text-base'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 256 256' fill='currentColor' className='h-4 w-4 mr-2 text-muted-foreground'>
                            <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"></path>
                        </svg>
                    What is stucco?
                    </button>
                    <button className='inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 shadow-none hover:underline h-auto p-0 text-base'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 256 256' fill='currentColor' className='h-4 w-4 mr-2 text-muted-foreground'>
                            <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"></path>
                        </svg>
                    What is stucco?
                    </button>
                </div>
                <Convo />
            </div>
        </div>
    )
}