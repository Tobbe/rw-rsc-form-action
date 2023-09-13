'use client'

export const SimpleForm = () => {
  return (
    <>
      {/* @ts-expect-error Experimental React */}
      <form action={() => console.log('form action')}>
        <input placeholder={'Say something...'} name="message" type="text" />
        <button type="submit">Send</button>
      </form>
    </>
  )
}
