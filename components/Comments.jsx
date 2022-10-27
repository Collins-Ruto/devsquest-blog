import React, {useState, useEffect} from 'react'
import parse from 'html-react-parser'
import { getComments } from '../services'
import moment from 'moment'

const Comments = ({ slug }) => {

  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  }, [])

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 border-b pb-4 font-semibold">
            {comments.length}
            {''}
            Comments
          </h3>
          {comments.map((comment) => (
            <div className="border-blur border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">
                  {comment.name}{''}
                  on {''}
                  {moment(comment.createdAt).format('MMM DD, YYYY')}
                </span>
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
                my on
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments