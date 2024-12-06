import { Extension } from "@tiptap/react";

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        lineHeight: {
            setLineHeight: (size: string) => ReturnType
            unsetLineHeight: () => ReturnType
        }
    }
}

export const LineHeightExtension = Extension.create({
    name: "lineHeight",
    addOptions() {
        return {
            types: ["paragraph", "heading"],
            defaultLineHeight: "normal"
        }
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    lineHeight: {
                        default: this.options.defaultLineHeight,
                        renderHTML: attributes => {
                            if (!attributes.lineHeight) return {}
                            return {
                                style: `line-height: ${attributes.lineHeight}`,
                            }
                        },
                        parseHTML: element => {
                            return element.style.lineHeight || this.options.defaultLineHeight
                        }
                    }
                }
            }
        ]
    },
    addCommands() {
        
    }
})