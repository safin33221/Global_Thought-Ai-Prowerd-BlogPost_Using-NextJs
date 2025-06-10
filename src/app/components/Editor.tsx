'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import Link from '@tiptap/extension-link'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight'
import Image from '@tiptap/extension-image'

const TiptapFullEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false, // we use lowlight-based code block
      }),
      Underline,
      TextStyle,
      Color,
      Link.configure({
        openOnClick: false,
      }),
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Image,
    ],
    content: '<p>Start writing your story...</p>',
  })

  if (!editor) return null

  const addImage = () => {
    const url = window.prompt('Enter image URL')
    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  const addLink = () => {
    const url = window.prompt('Enter URL')
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex flex-wrap gap-2 mb-4">
        {/* Basic formatting */}
        <button onClick={() => editor.chain().focus().toggleBold().run()} className="btn">Bold</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="btn">Italic</button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className="btn">Underline</button>
        <button onClick={() => editor.chain().focus().toggleHighlight().run()} className="btn">Highlight</button>
        <input
          type="color"
          onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          className="w-10 h-10 p-0 border"
        />

        {/* Headings */}
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className="btn">H1</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="btn">H2</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className="btn">H3</button>

        {/* Lists */}
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="btn">Bullet List</button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="btn">Numbered List</button>

        {/* Code block */}
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className="btn">Code Block</button>

        {/* Link/Image */}
        <button onClick={addLink} className="btn">Add Link</button>
        <button onClick={addImage} className="btn">Add Image</button>

        {/* Alignment */}
        <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className="btn">Left</button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className="btn">Center</button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className="btn">Right</button>

        {/* Undo/Redo */}
        <button onClick={() => editor.chain().focus().undo().run()} className="btn">Undo</button>
        <button onClick={() => editor.chain().focus().redo().run()} className="btn">Redo</button>
      </div>

      <EditorContent editor={editor} className="border rounded p-4 min-h-[200px]" />
    </div>
  )
}

export default TiptapFullEditor
