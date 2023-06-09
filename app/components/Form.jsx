import Link from "next/link"

const Form = ({
  type,post,
  setpost,
  submitting,
  handleSubmit
}

) => {
  return (
    <div>
      <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left w-full"><span className="blue_gradient">{type} Post</span></h1>
        <p className=" desc text-left max-w-md">{type} and share amazing prompts with the world,
        and let you imagination run wild with any AI-powered platform</p>
        <form 
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-4 glassmorphism">
          <label><span className="font-satoshi font-semibold text-base text-grey-700">Your AI Prompt</span>
            <textarea
            value={post.prompt}
            onChange={(e)=>setpost({...post,prompt:e.target.value})}
            placeholder="write your prompt here..."
            required
            className="form_textarea"></textarea>
          </label>
          <label><span className="font-satoshi font-semibold text-base text-grey-700">tag(#product,#webdevelopment,#idea)</span>
            <input
            value={post.tag}
            onChange={(e)=>setpost({...post,tag:e.target.value})}
            placeholder="#tag"
            required
            className="form_input"></input>
          </label>
          <div className="f justify-end mx-3 mb-5 flex gap-3">
             <Link href='/'className="px-5 py-2 text-grey-500 text-sm font-medium">Cancel</Link>
             <button type='submit'
             disabled={submitting}
             className="px-5 py-2 text-sm bg-orange-500 rounded-full font-medium text-white hover:bg-orange-400 outline:none  ">
              {submitting?`${type}...`:type}
             </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Form
