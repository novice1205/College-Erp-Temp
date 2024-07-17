import '../App.css'
import { Button, buttonVariants } from '../components/ui/button'
import { SheetDemo } from '../components/ui/sidebar'
import { Component } from '../components/ui/piechart'
import { Avatar, AvatarImage } from '../components/ui/avatar'
import { AlertDialogDemo } from '../components/ui/dialogdemo'
import { TableDemo } from '../components/ui/tablemain'
<<<<<<< HEAD
import { cn } from '../lib/utils'
// import { Dashboard } from '../components/ui/dashboard'
=======
import { Dashboard } from '../components/ui/dashboard'
>>>>>>> 01565dcaf2589d83176619537a26a1cd047c7c06


function App() {
  return (
    <>
      {/* <div className="flex bg-[#0869D9] h-24 rounded-b-lg m-0 items-center p-4">
        <SheetDemo>
        </SheetDemo>
        <div className="flex sm:flex-row ml-auto bg-blue-600 rounded-2xl h-20 p-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <p className="m-4 text-white">Raghav Sethi</p>
          <Button className="mt-2 sm:mt-0">Logout</Button>
        </div>
      </div>
      <div className=" flex hidden items-center m-12">
        <div className="p-4 mr-10">
        <Component></Component>
        </div>
        <div className="w-full items-center"><TableDemo></TableDemo>
        <AlertDialogDemo></AlertDialogDemo>
        </div>
<<<<<<< HEAD
      </div> */}
      {/* <Button variant={'outline'}>Click Me</Button> */}
      
=======
      </div>
      <Dashboard></Dashboard>
>>>>>>> 01565dcaf2589d83176619537a26a1cd047c7c06
    </>
  )
}

export default App;

