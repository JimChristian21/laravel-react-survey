import { Link } from "react-router-dom"

export default function TButton({
    color = 'indigo',
    to = '',
    circle = false,
    href = '',
    link = false,
    target = "_blank",
		onClick = () => {},
    children
}) {

	console.log(circle);

  let classes = [
    "flex",
    "whitespace-nowrap",
    "text-sm",
    "border",
    "border-2",
    "border-transparent"
  ];

	classes = link
		? [
      ...classes,
      "transition-colors",
			`text-${color}-500`,
			`focus:border-${color}-500`,
    ]
		: [
			...classes,
			"text-white",
			"focus:ring-2",
			"focus:ring-offset-2",
			`bg-${color}-600`,
			`hover:bg-${color}-700`,
			`focus:ring-${color}-500`,
		];

	classes = circle 
		? [
			...classes,
			"h-8",
			"w-8",
			"items-center",
			"justify-center",
			"rounded-full",
			"text-sm",
		] 
		: [
			...classes,
			"p-0",
			"py-2",
			"px-4",
			"rounded-md",
		];

  return (
    <>
			{href && (
				<a href={href} className={classes.join(" ")} target={target}>{children}</a>
			)}

			{to && (
				<Link to={to} className={classes.join(" ")}>{children}</Link>
			)}

			{!href && !to && (
				<button onClick={onClick} className={classes.join(" ")}>{children}</button>
			)}
		</>
  )
}
