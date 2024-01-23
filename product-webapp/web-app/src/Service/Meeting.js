import { useMediaQuery, useTheme } from "@material-ui/core";


export const getToken = () => {
    const tokens =  [
        // token
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjNGRjOThjMS05M2RkLTQ1NTEtYTg2My05MjFmYWM0M2IwZDQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIl0sImlhdCI6MTY2NzE5MDU5OSwiZXhwIjoxNjY3NDQ5Nzk5fQ.7d2Io58Hn4Eu1EC4kYmJQvCOllA9m1IM1gd8xEq1byI",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjNGRjOThjMS05M2RkLTQ1NTEtYTg2My05MjFmYWM0M2IwZDQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIl0sImlhdCI6MTY2NzE5MDcxNSwiZXhwIjoxNjY3NDQ5OTE1fQ.Mbi8kqjdExCR42tKBJXBO23ftzgYnGqNHvHZDw4jE30",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjNGRjOThjMS05M2RkLTQ1NTEtYTg2My05MjFmYWM0M2IwZDQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIl0sImlhdCI6MTY2NzE5MDczNSwiZXhwIjoxNjY3NDQ5OTM1fQ.cEGAINwFxSPMo6pJ7THd7IzRx3xdz4GsKWYqKU2Zdlc",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjNGRjOThjMS05M2RkLTQ1NTEtYTg2My05MjFmYWM0M2IwZDQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIl0sImlhdCI6MTY2NzE5MDc1NCwiZXhwIjoxNjY3NDQ5OTU0fQ.q6JhLEA-Zggr62PCEgeGsGtkEYmyNcZEE_T_twIdjq8",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJjNGRjOThjMS05M2RkLTQ1NTEtYTg2My05MjFmYWM0M2IwZDQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIiwiYWxsb3dfbW9kIl0sImlhdCI6MTY2NzE5MDc3MSwiZXhwIjoxNjY3NDQ5OTcxfQ.rKB3hs2cTh2R6DX-CpV9kXjr8fkHuU6KYG3bCTyLP9k"
        ];
    return tokens[Math.floor(Math.random() * 4)]
}

export const createMeeting = () => {
    return "nd5j-d0yu-3g25"
}

/**
 *
 * @param {{
 * xs: number
 * sm: number
 * md: number
 * lg: number
 * xl: number
 * }} param0
 *
 */

export const useResponsiveSize = ({ xs, sm, md, lg, xl }) => {
  const theme = useTheme();
  const gtThenXS = useMediaQuery(theme.breakpoints.up("xs"));
  const gtThenSM = useMediaQuery(theme.breakpoints.up("sm"));
  const gtThenMD = useMediaQuery(theme.breakpoints.up("md"));
  const gtThenLG = useMediaQuery(theme.breakpoints.up("lg"));
  const gtThenXL = useMediaQuery(theme.breakpoints.up("xl"));

  return gtThenXL
    ? xl
    : gtThenLG
    ? lg
    : gtThenMD
    ? md
    : gtThenSM
    ? sm
    : gtThenXS
    ? xs
    : lg;
};
