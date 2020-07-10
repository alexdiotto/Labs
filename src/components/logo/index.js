import React from 'react'

const Logo = ({ width, height, x, y }) => (
    <svg width={width || '51'} height={height || '40'} viewBox={`0 0 ${x || '51'} ${y || '40'}`} preserveAspectRatio="xMidYMid meet">
        <defs>
            <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%" >
                <stop offset="0%" stopColor="#00B8FD">
                    <animate attributeName="stop-color" values="#00B8FD; #1DE464; #00B8FD" dur="1s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#1DE464">
                    <animate attributeName="stop-color" values="#1DE464; #00B8FD; #1DE464" dur="1s" repeatCount="indefinite" />
                </stop>
            </linearGradient>
        </defs>
        <g>
            <path fill="url('#logo-gradient')" fillRule="evenodd" d="M8.488 0C6.907 0 5.41.88 4.383 2.412c-.64.954-.991 2.19-.991 3.48v10.122c0 1.157-.512 1.818-.691 1.872h-.995a1.706 1.706 0 1 0 0 3.412H2.7c2.299 0 4.102-2.322 4.102-5.284V5.893c0-.604.155-1.195.415-1.583.767-1.142 1.776-1.142 2.542 0 .26.388.415.979.415 1.583v27.4c0 1.293.351 2.529.99 3.48 1.027 1.532 2.522 2.411 4.106 2.411 1.583 0 3.079-.879 4.105-2.41.64-.952.992-2.188.992-3.481v-22.34c0-.603.155-1.194.415-1.581.382-.572.846-.9 1.27-.9h.002c.425.001.888.328 1.27.9.26.387.413.978.413 1.58v17.28c0 1.29.352 2.525.992 3.48 1.026 1.531 2.522 2.411 4.105 2.411 1.583 0 3.08-.878 4.108-2.41.64-.956.99-2.192.99-3.48v-12.22c0-.603.155-1.195.414-1.58.764-1.142 1.776-1.145 2.543 0 .259.385.414.977.414 1.58v7.159c0 1.29.352 2.526.99 3.479 1.03 1.532 2.524 2.41 4.107 2.41 1.582 0 3.077-.878 4.105-2.41.64-.953.991-2.19.991-3.48 0-1.157.512-1.819.692-1.873h.995c.943 0 1.705-.764 1.705-1.706s-.762-1.706-1.705-1.706h-.995c-2.3 0-4.103 2.322-4.103 5.286 0 .602-.155 1.193-.414 1.58-.766 1.143-1.775 1.144-2.544 0-.258-.387-.413-.978-.413-1.58v-7.158c0-1.292-.352-2.527-.99-3.481C38.697 11 37.202 10.12 35.62 10.12c-1.584 0-3.08.88-4.108 2.412-.638.954-.99 2.19-.99 3.48v12.22c0 .602-.154 1.193-.414 1.58-.383.571-.846.9-1.271.9h-.001c-.425 0-.89-.329-1.27-.9-.26-.387-.414-.978-.414-1.58v-17.28c0-1.29-.352-2.526-.991-3.48-1.028-1.532-2.523-2.411-4.105-2.412h-.002c-1.583 0-3.079.879-4.105 2.411-.64.955-.992 2.191-.992 3.48v22.34c0 .606-.153 1.197-.412 1.582-.767 1.14-1.776 1.146-2.546-.002-.259-.383-.411-.974-.411-1.58v-27.4c0-1.29-.352-2.526-.992-3.48C11.567.879 10.07 0 8.488 0z" />
            <path xmlns="http://www.w3.org/2000/svg" fill="#FFF" d="M88.285 27.047h-2.343v7.728H82.26V15.498h5.746c5.096 0 7.644 1.888 7.644 5.663 0 1.283-.316 2.343-.948 3.18-.633.837-1.618 1.516-2.957 2.037l5.049 8.397h-4.24l-4.269-7.728zm-2.343-2.65h2.288c1.171 0 2.06-.256 2.664-.767.604-.512.906-1.335.906-2.47 0-1.04-.311-1.798-.934-2.273-.623-.474-1.604-.711-2.943-.711h-1.98v6.221zm19.277-4.798c2.176 0 3.873.692 5.091 2.078s1.827 3.287 1.827 5.705c0 1.544-.279 2.906-.837 4.087-.558 1.18-1.357 2.097-2.399 2.748-1.041.65-2.278.976-3.71.976-2.176 0-3.878-.693-5.105-2.078-1.228-1.386-1.841-3.297-1.841-5.733 0-1.544.279-2.901.837-4.073.557-1.172 1.362-2.083 2.413-2.734 1.05-.65 2.292-.976 3.724-.976zm0 2.706c-2.139 0-3.208 1.692-3.208 5.077 0 1.748.265 3.036.795 3.864.53.827 1.325 1.241 2.385 1.241 1.06 0 1.855-.418 2.385-1.255.53-.837.795-2.12.795-3.85s-.265-3.008-.795-3.836c-.53-.827-1.316-1.241-2.357-1.241zm16.208-2.706c.967 0 1.837.14 2.608.418.772.28 1.502.716 2.19 1.311l-1.59 2.148c-.502-.372-.985-.641-1.45-.809a4.5 4.5 0 0 0-1.535-.25c-2.213 0-3.32 1.682-3.32 5.049 0 1.71.289 2.943.865 3.696.577.753 1.395 1.13 2.455 1.13.521 0 1-.084 1.437-.251.437-.168.953-.437 1.548-.81l1.59 2.26c-1.395 1.135-2.985 1.702-4.77 1.702-1.414 0-2.641-.311-3.682-.934-1.042-.623-1.842-1.511-2.4-2.665-.558-1.153-.837-2.51-.837-4.073 0-1.562.28-2.943.837-4.142.558-1.2 1.358-2.13 2.4-2.79 1.041-.66 2.26-.99 3.654-.99zm10.964-5.887v21.063h-3.571V14.103l3.57-.39zm8.843 6.305l-4.91 6.5 5.384 8.258h-4.1l-5.078-8.063 4.938-6.695h3.766zm3.124 14.758V15.554h10.21l-.306 2.12h-7.253v6.556h6.276v2.092h-6.276v8.453h-2.65zm24.494 0h-2.204l-.195-2.288c-.558.911-1.2 1.576-1.925 1.995-.725.418-1.609.627-2.65.627-1.284 0-2.288-.39-3.013-1.171-.726-.781-1.088-1.888-1.088-3.32V20.073h2.566v10.266c0 1.004.177 1.716.53 2.134.354.419.93.628 1.73.628 1.432 0 2.66-.846 3.682-2.539V20.073h2.567v14.702zm12.219-15.037c1.339 0 2.385.4 3.138 1.2.753.8 1.13 1.897 1.13 3.292v10.545h-2.566V24.592c0-1.041-.196-1.776-.586-2.204-.39-.427-.967-.641-1.73-.641-.781 0-1.47.223-2.064.67-.595.446-1.153 1.087-1.674 1.924v10.434h-2.567V20.073h2.204l.223 2.176a5.81 5.81 0 0 1 1.94-1.841 5.007 5.007 0 0 1 2.552-.67zm16.347 0c1.34 0 2.386.4 3.139 1.2.753.8 1.13 1.897 1.13 3.292v10.545h-2.567V24.592c0-1.041-.195-1.776-.586-2.204-.39-.427-.967-.641-1.73-.641-.78 0-1.469.223-2.064.67-.595.446-1.153 1.087-1.673 1.924v10.434H190.5V20.073h2.204l.223 2.176a5.81 5.81 0 0 1 1.939-1.841 5.007 5.007 0 0 1 2.552-.67zm20.533 7.253c0 .428-.019.865-.056 1.312h-9.374c.112 1.618.521 2.808 1.228 3.57.707.763 1.618 1.144 2.734 1.144.707 0 1.357-.102 1.953-.307.595-.204 1.218-.53 1.869-.976l1.116 1.534c-1.563 1.228-3.274 1.841-5.133 1.841-2.046 0-3.641-.67-4.785-2.008-1.144-1.34-1.715-3.18-1.715-5.524 0-1.525.246-2.878.739-4.059.493-1.18 1.2-2.106 2.12-2.776.92-.669 2.004-1.004 3.25-1.004 1.953 0 3.45.642 4.491 1.925 1.042 1.283 1.563 3.06 1.563 5.328zm-2.539-.753c0-1.45-.288-2.557-.865-3.32-.576-.762-1.441-1.143-2.594-1.143-2.102 0-3.246 1.543-3.432 4.63h6.891v-.167zm9.569 8.871c-.949 0-1.697-.283-2.246-.85-.549-.568-.823-1.363-.823-2.386V14.16l2.567-.307v17.966c0 .409.07.706.209.892.14.186.376.28.711.28.354 0 .67-.057.949-.168l.67 1.785a4.183 4.183 0 0 1-2.037.502zm9.234-15.37c1.004 0 1.906.139 2.706.418.8.279 1.562.697 2.287 1.255l-1.088 1.618c-.67-.428-1.306-.744-1.91-.948a5.92 5.92 0 0 0-1.912-.307c-.837 0-1.497.172-1.98.516-.484.344-.726.813-.726 1.409 0 .595.228 1.06.684 1.394.455.335 1.278.66 2.469.977 1.636.409 2.86.967 3.668 1.674.81.706 1.214 1.673 1.214 2.9 0 1.452-.563 2.558-1.688 3.32-1.125.763-2.497 1.144-4.115 1.144-2.232 0-4.082-.641-5.551-1.924l1.366-1.563c1.247.949 2.623 1.423 4.13 1.423.966 0 1.734-.2 2.3-.6.568-.4.852-.944.852-1.632 0-.502-.103-.906-.307-1.213-.205-.307-.558-.577-1.06-.81-.502-.232-1.237-.478-2.204-.738-1.562-.41-2.692-.958-3.39-1.646-.697-.689-1.046-1.563-1.046-2.623 0-.762.228-1.455.684-2.078.455-.623 1.088-1.107 1.897-1.45.809-.345 1.715-.517 2.72-.517z" />
        </g>
    </svg>
)

export default Logo