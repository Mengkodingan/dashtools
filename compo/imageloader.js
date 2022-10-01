const imageLoader = ({ src }) => {
    return `/api/imageProxy?url=${encodeURIComponent(src)}`
}

module.exports = imageLoader