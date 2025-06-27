import * as React from "react"
import { type Editor } from "@tiptap/react"
import { useTiptapEditor } from "@/hooks/use-tiptap-editor"
import { ImagePlusIcon } from "@/components/tiptap-icons/image-plus-icon"
import type { ButtonProps } from "@/components/tiptap-ui-primitive/button"
import { Button } from "@/components/tiptap-ui-primitive/button"

export interface ImageUploadButtonProps extends ButtonProps {
  editor?: Editor | null
  text?: string
  extensionName?: string
}

export const ImageUploadButton = React.forwardRef<
  HTMLButtonElement,
  ImageUploadButtonProps
>(
  (
    {
      editor: providedEditor,
      // extensionName = "image",
      text,
      className = "",
      disabled,
      onClick,
      children,
      ...buttonProps
    },
    ref
  ) => {
    const editor = useTiptapEditor(providedEditor)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      if (!e.defaultPrevented && !disabled) {
        fileInputRef.current?.click()
      }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (!file || !editor) return
      // Show image instantly using a blob URL
      const url = URL.createObjectURL(file)
      editor.chain().focus().setImage({ src: url }).run()
      // Optionally: upload to server, then replace URL with permanent one
      e.target.value = "" // reset input
    }

    if (!editor || !editor.isEditable) {
      return null
    }

    return (
      <>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <Button
          ref={ref}
          type="button"
          className={className.trim()}
          data-style="ghost"
          role="button"
          tabIndex={-1}
          aria-label="Add image"
          aria-pressed={false}
          tooltip="Add image"
          onClick={handleButtonClick}
          {...buttonProps}
        >
          {children || (
            <>
              <ImagePlusIcon className="tiptap-button-icon" />
              {text && <span className="tiptap-button-text">{text}</span>}
            </>
          )}
        </Button>
      </>
    )
  }
)

ImageUploadButton.displayName = "ImageUploadButton"

export default ImageUploadButton