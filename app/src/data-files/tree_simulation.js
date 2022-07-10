export default {
  title: "Forests are self-unavoidable",
  description: `
    The Builder can force the Painter to create a monochromatic
    copy of any forest while never creating a graph that is not itself a forest.
    The same as saying that the class of forests is unavoidable.
  `,
  steps: [
    {
      graph: "",
      colors: "",
      title: "Method:",
      description: `
        Note that showing that every tree is unavoidable in the class of
        forests is sufficient. This will be shown via induction in the number of
        vertices.
      `,
      duration: 5000,
    },
    {
      graph: "D@s",
      colors: "wwwww",
      title: "Let:",
      description: `
        Take any tree T with N vertices, with N > 1. T will be the target.
      `,
      duration: 6000,
    },
    {
      graph: "D@s",
      colors: "wwwww",
      title: "Simulation clarification:",
      description: `
        In the visual example, consider that the selected tree is the one shown,
        with five vertices (N = 5).
      `,
      duration: 8000,
    },
    {
      graph: "CR",
      colors: "rrr",
      title: "Induction Hypotesis",
      description: `
        Take a second tree T', created by removing a leaf of T. Suppose, via
        induction, that the Builder can force the Painter to create a
        monochromatic copy of T'.
      `,
      duration: 8000,
    },
    {
      graph: "Sh???????O?`?_?O_C??`?????G??G??C",
      colors: "bbbbbbbbbbbbbbbb",
      title: "Induction Step (1/3)",
      description: `
        Since the Builder can force a copy of T', he/she can also force N
        monochromatic copies of T'.
      `,
      duration: 8000,
    },
    {
      graph: "Sh??????AO?`?a?O_CO?`????AG??G??C",
      colors: "bbbgbbbbwbbbwbbwbbb",
      title: "Induction Step (2/3)",
      description: `
        Connect the parents of the vertices correpondant to the leaves removed in
        each of the copies of T'.
      `,
      duration: 8000,
    },
    {
      graph: "Sh??????AO?`?a?O_CO?`????AG??G??C",
      colors: "bbbrbbbbrbbbrbbwbbb",
      title: "Induction Step (3/3)",
      description: `
        Note that the each of the new edges cannot be colored blue, since that
        would form a monochromatic copy of T. However, the last edge cannot be
        colored neither blue nor red, as it would form a monochromatic copy of T,
        either blue or red.
      `,
      duration: 10000,
    },
    {
      graph: "Sh??????AO?`?a?O_CO?`????AG??G??C",
      colors: "bbbwbbbbwbbbwbbwbbb",
      title: "Therefore",
      description: `
        Any tree is unavoidable in the class of forrests. This also means that any
        forest is unavoidable in the class of forests.
      `,
      duration: 3000,
    },
  ],
};
