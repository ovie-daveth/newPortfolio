"use client"
import React from 'react'
import Blog from '../page'
import Image from 'next/image'
import web from 'public/websites.jpg'
import {AiFillLike} from 'react-icons/ai'
import {FcLike} from "react-icons/fc"
import {BsFillShareFill} from "react-icons/bs"
import Comments from '../../../components/comments/Comments'
import { ThemeContext } from '../../../../context/ThemeContext'
import { useContext } from 'react'

const BlogPages = ({params}) => {
  const {mode } = useContext(ThemeContext)
  return (
    <div className="flex flex-col gap-5 px-[10rem] py-[3rem]">
     <div className="flex justify-between">
        <div className="flex flex-col gap-3 flex-1">
          <h1 className="md:text-3xl font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sit, rem placeat necessitatibus modi minima?</h1>
          <p className='font-semibold italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque numquam esse deserunt repudiandae, mollitia ea cum laudantium, dolores consequuntur at commodi libero assumenda praesentium inventore doloribus, aperiam ex harum iusto.</p>
          <div className='flex items-center gap-2'>
            <p>Omokefe Ovie</p>
            <p>22/02/2023</p>
          </div>
        </div>
        <div className="flex-1">
          <Image src={web} alt="image" className="w-[100%]" />
        </div>
     </div>
     <div className={`${mode==='light'?"text-gray-800":"text-gray-300"} flex flex-col gap-3`}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nihil reiciendis ut recusandae quisquam quae perferendis laborum necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae tenetur aspernatur esse voluptates architecto accusantium est asperiores libero animi, labore, tempora consequuntur et harum quis tempore ullam facilis magnam in impedit? Tempore, consequuntur debitis iste eius sed qui iusto saepe.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur commodi doloremque voluptatum similique, ea perspiciatis. Nam veritatis vel molestias qui debitis esse officiis facere cumque accusamus, doloribus, nemo exercitationem repudiandae!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, rem?</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit id asperiores voluptates ad modi libero nam eius quod, ut nobis, culpa sed alias temporibus quis exercitationem reiciendis doloribus, iure pariatur?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, temporibus. Mollitia cupiditate possimus eos eius beatae ut unde impedit, minima assumenda dolore? Eveniet iusto minima libero a distinctio velit rerum excepturi provident fugit reiciendis vero, maxime sint beatae explicabo repellat!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis possimus incidunt, quibusdam veniam similique harum officiis accusamus! Laborum, accusantium sunt? Ad consectetur veritatis, blanditiis ea asperiores debitis corrupti doloribus. Aut eaque vitae quaerat maiores. Veritatis reprehenderit fuga hic id ad debitis maiores ab ipsum minima ipsa, provident temporibus perferendis esse aspernatur neque aliquam iste itaque in totam consequatur necessitatibus voluptatum optio, excepturi ducimus! Nostrum veritatis dignissimos optio odio eveniet recusandae quas reprehenderit eos esse possimus blanditiis vero vel, cum in obcaecati quae illum nisi ab vitae voluptatum mollitia odit aliquam necessitatibus. Odio, autem magnam laboriosam ab ipsum modi doloribus ipsa!</p>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, delectus iure quis accusamus et eveniet excepturi possimus distinctio ex nihil, eaque ipsa totam a sed! Sint hic non ab illum excepturi modi praesentium et, molestiae ipsa dolor totam fugit quasi doloribus veritatis nisi obcaecati beatae animi asperiores? Cum ut sit eum debitis provident sed esse commodi aut. Corporis tempora, quaerat itaque vel ea a numquam. Voluptatem deleniti, repellendus praesentium distinctio voluptatum laudantium quam quisquam sequi incidunt facere molestiae quasi necessitatibus aspernatur delectus laboriosam, nemo dolores sunt laborum explicabo a porro aut magnam dolorem. Expedita porro quaerat iusto tempore. Consequuntur enim nostrum vel dignissimos maiores nihil? Iste officiis nobis voluptas fugit necessitatibus vel consectetur voluptate minima facere aliquam optio tempore corrupti, harum nulla alias. Totam cupiditate asperiores sit eveniet reprehenderit tempore suscipit ad laboriosam, aspernatur laudantium dicta quam aperiam nesciunt molestiae corporis beatae tempora sapiente? Iusto eum fugiat, quas molestias aliquid autem neque, praesentium laborum corporis, illum amet adipisci est quaerat. Doloribus laudantium porro modi ad officia sint laboriosam nam et harum inventore, dicta amet excepturi repellendus nisi? Perferendis veniam quo tempore maiores perspiciatis, nisi amet dolorum possimus cum beatae quia ex dicta pariatur sit ipsam mollitia quis esse deleniti! Quisquam illo eaque totam sit est vitae nisi modi quasi, illum consequatur, corrupti commodi quae quia. Ex repellendus vitae porro tempora repudiandae molestias eaque veniam ratione voluptas, dignissimos commodi iste laborum ullam minima dolorum deserunt delectus perferendis est repellat esse sed quos tenetur. Quos quod eligendi, dolorem reprehenderit perspiciatis laborum aspernatur tenetur placeat quo, dicta velit asperiores veritatis facilis molestiae dolores architecto expedita inventore rem? Dignissimos ipsam nisi, commodi veritatis officiis ipsa eveniet. Error, voluptatem nesciunt alias minus, reiciendis facere beatae libero qui provident dolores distinctio magni id deleniti officia dignissimos corporis veniam quos consequuntur quasi ut! Ipsum odit quae officia.</p>
     </div>
     <div className="flex items-center gap-3 md:text-2xl text-lg border-t-[1.4px] border-gray-400 py-5">
      <span><AiFillLike /></span>
      <span><FcLike /></span>
      <span><BsFillShareFill /></span>
     </div>
     <div className="flex flex-col gap-5">
      <h1>Comments</h1>
      <div className=''>
        no comments
      </div>
     <div className="block w-[40%]">
       <Comments />
     </div>
     </div>
    </div>
  )
}

export default BlogPages
