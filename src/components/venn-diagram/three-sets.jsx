import React from "react";
import PropTypes from "prop-types";
import { Group } from "@visx/group";
import { getPoints } from "@visx/shape";
import { UnselectableText, RevertedCirclePath } from "./circle-path";
import intersection from "../../utils/intersection";

const getElementalSet = (n, func) => [n, func(n)]

export const ThreeSetsDiagram = ({
  containerSize,
  radius,
  color = "black",
  selected = [],
  onClick = () => {}
}) => {
  const svgSize = containerSize.width < containerSize.height
    ? containerSize.width
    : containerSize.height;
  const circles = getPoints({
    sides: 3,
    size: svgSize / 6,
    center: {
      x: svgSize / 2,
      y: svgSize / 2,
    },
    rotate: 0,
  });

  const intersect12 = intersection(
    circles[0].x, circles[0].y, radius, circles[1].x, circles[1].y, radius
  );
  const intersect23 = intersection(
    circles[1].x, circles[1].y, radius, circles[2].x, circles[2].y, radius
  );
  const intersect13 = intersection(
    circles[0].x, circles[0].y, radius, circles[2].x, circles[2].y, radius
  );

  const elementalSets = [
    getElementalSet(1, number => (
      <g>
        <path
          d={
            `M${intersect13[0]},${intersect13[2]} ` +
            `A${radius},${radius} 0 1,1 ` +
            `${intersect12[1]},${intersect12[3]} ` +
            `A${radius},${radius} 0 0,0 ` +
            `${intersect23[0]},${intersect23[2]} ` +
            `A${radius},${radius} 0 0,0 ` +
            `${intersect13[0]},${intersect13[2]} Z`
          }
          fill={selected.includes(number) ? color : "transparent"}
          stroke="black"
          strokeWidth="2px"
          onClick={event => onClick({ number, event })}
        />
        <UnselectableText
          x={intersect23[0] + radius / 2}
          y={intersect23[2]}
          fill={selected.includes(number) ? "white" : color}
        >
         A
        </UnselectableText>
      </g>
    )),
    getElementalSet(2, number => (
      <g>
        <path
          d={
            `M${intersect12[1]},${intersect12[3]} ` +
            `A${radius},${radius} 0 1,1 ` +
            `${intersect23[1]},${intersect23[3]} ` +
            `A${radius},${radius} 0 0,0 ` +
            `${intersect13[1]},${intersect13[3]} ` +
            `A${radius},${radius} 0 0,0 ` +
            `${intersect12[1]},${intersect12[3]} Z`
          }
          fill={selected.includes(number) ? color : "transparent"}
          stroke="black"
          strokeWidth="2px"
          onClick={event => onClick({ number, event })}
        />
        <UnselectableText
          x={intersect13[1] - radius / 2}
          y={intersect13[3] + radius / 2}
          fill={selected.includes(number) ? "white" : color}
        >
         B
        </UnselectableText>
      </g>
    )),
    getElementalSet(3, number => (
      <g>
        <path
          d={
            `M${intersect23[1]},${intersect23[3]} ` +
            `A${radius},${radius} 0 1,1 ` +
            `${intersect13[0]},${intersect13[2]} ` +
            `A${radius},${radius} 0 0,0 ` +
            `${intersect12[0]},${intersect12[2]} ` +
            `A${radius},${radius} 0 0,0 ` +
            `${intersect23[1]},${intersect23[3]} Z`
          }
          fill={selected.includes(number) ? color : "transparent"}
          stroke="black"
          strokeWidth="2px"
          onClick={event => onClick({ number, event })}
        />
        <UnselectableText
          x={intersect12[0] - radius / 2}
          y={intersect12[2] - radius / 2}
          fill={selected.includes(number) ? "white" : color}
        >
         C
        </UnselectableText>
      </g>
    )),
    getElementalSet(4, number => (
      <g>
        <path
          d={
            `M${intersect12[1]},${intersect12[3]} ` +
            `A${radius},${radius} 0 0,1 ` +
            `${intersect13[1]},${intersect13[3]} ` +
            `A${radius},${radius} 0 0,0 ` +
            `${intersect23[0]},${intersect23[2]} ` +
            `A${radius},${radius} 0 0,1 ` +
            `${intersect12[1]},${intersect12[3]} Z`
          }
          fill={selected.includes(number) ? color : "transparent"}
          stroke="black"
          strokeWidth="2px"
          onClick={event => onClick({ number, event })}
        />
      </g>
    )),
    getElementalSet(5, number => (
      <g>
        <path
          d={
            `M${intersect23[1]},${intersect23[3]} ` +
            `A${radius},${radius} 0 0,1 ` +
            `${intersect12[0]},${intersect12[2]} ` +
            `A${radius},${radius} 0 0,0 ` +
            `${intersect13[1]},${intersect13[3]} ` +
            `A${radius},${radius} 0 0,1 ` +
            `${intersect23[1]},${intersect23[3]} Z`
          }
          fill={selected.includes(number) ? color : "transparent"}
          stroke="black"
          strokeWidth="2px"
          onClick={event => onClick({ number, event })}
        />
      </g>
    )),
    getElementalSet(6, number => (
      <g>
        <path
          d={
            `M${intersect13[0]},${intersect13[2]} ` +
            `A${radius},${radius} 0 0,1 ` +
            `${intersect23[0]},${intersect23[2]} ` +
            `A${radius},${radius} 0 0,0 ` +
            `${intersect12[0]},${intersect12[2]} ` +
            `A${radius},${radius} 0 0,1 ` +
            `${intersect13[0]},${intersect13[2]} Z`
          }
          fill={selected.includes(number) ? color : "transparent"}
          stroke="black"
          strokeWidth="2px"
          onClick={event => onClick({ number, event })}
        />
      </g>
    )),
    getElementalSet(7, number => (
      <g>
        <path
          d={
            `M${intersect23[0]},${intersect23[2]} ` +
            `A${radius},${radius} 0 0,1 ` +
            `${intersect13[1]},${intersect13[3]} ` +
            `A${radius},${radius} 0 0,1 ` +
            `${intersect12[0]},${intersect12[2]} ` +
            `A${radius},${radius} 0 0,1 ` +
            `${intersect23[0]},${intersect23[2]} Z`
          }
          fill={selected.includes(number) ? color : "transparent"}
          stroke="black"
          strokeWidth="2px"
          onClick={event => onClick({ number, event })}
        />
      </g>
    )),
    getElementalSet(0, number => (
      <g>
        <path
          d={
            // Outer circles
            `M${intersect13[0]},${intersect13[2]} ` +
            `A${radius},${radius} 0 1,1 ` +
            `${intersect12[1]},${intersect12[3]} ` +
            `A${radius},${radius} 0 1,1 ` +
            `${intersect23[0]},${intersect23[2]} ` +
            `A${radius},${radius} 0 1,1 ` +
            `${intersect13[0]},${intersect13[2]} Z ` +
            // The "eye"; needed to mask a overlapping part
            `M${intersect23[0]},${intersect23[2]} ` +
            `A${radius},${radius} 0 0,0 ` +
            `${intersect23[1]},${intersect23[3]} ` +
            `A${radius},${radius} 0 0,0 ` +
            `${intersect23[0]},${intersect23[2]} Z ` +
            // Rectangle
            `M10,10 ` +
            `L${10 + containerSize.width - 20},10 ` +
            `L${10 + containerSize.width - 20},${10 + containerSize.height - 20} ` +
            `L10,${10 + containerSize.width - 20} ` +
            `L10,10`
          }
          fill={selected.includes(number) ? color : "transparent"}
          fillRule="evenodd"
          stroke="black"
          strokeWidth="2px"
          onClick={event => onClick({ number, event })}
        />
      </g>
    )),
  ]

  return (
    <Group className="venn-diagram-sets">
      {elementalSets.map(([_, path]) => path)}
    </Group>
  )
}

ThreeSetsDiagram.propTypes = {
  containerSize: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  radius: PropTypes.number.isRequired,
  color: PropTypes.string,
  selected: PropTypes.arrayOf(PropTypes.number),
  onClick: PropTypes.func,
}

export default ThreeSetsDiagram
