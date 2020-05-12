import React, { Component } from 'react';
import trackByReleasedDate from '../utils/tracksByReleasedDate';

class TimeRange extends Component {

    render() {
        const tracks = this.props.tracks;
        if (tracks == null) return null;

        let byYear = trackByReleasedDate(tracks);
        let min_year = 5000, max_year = -5000;

        for (const year in byYear) {
            min_year = Math.min(min_year, year);
            max_year = Math.max(max_year, year);
        }
        const decade = (max_year - min_year >= 10 ? (
            <span className="Outer" style={{ padding: 'None' }}>
                , for over
                <span className="colored"> {Math.floor((max_year - min_year) / 10)} </span>
                decades
            </span>
        )
            : null)

        const century = (max_year - min_year >= 100 ? (
            <span className="Outer" style={{ padding: 'None' }}>
                ,
                <span className="colored"> {Math.floor((max_year - min_year) / 100)} </span>
                centuries
            </span>
        )
            : null)

        const old_track = byYear[min_year][0];

        const example_old = (
            <div className="example_wrapper" key="example_old">
                <img
                    className="album_cover_big"
                    src={old_track.track.album.images[1].url}
                    alt={old_track.track.name}
                ></img>

                <div>
                    <p>
                        one of your oldest tracks is
                    </p>
                    <p>
                        <a className="bold" href="item.track.external_urls.spotify">{old_track.track.name}</a>
                    </p>
                    <p>
                        by {' '}
                        {old_track.track.artists
                            .map((artist, key) => (
                                <a className="bold" key={key} href={artist.external_urls.spotify}>
                                    {artist.name}
                                </a>
                            ))
                            .reduce((prev, curr) => [prev, ', ', curr])}
                    </p>
                    <p>
                        released
                        <span className="colored"> {old_track.track.album.release_date}</span>.
                    </p>
                </div>
            </div>
        )

        const new_track = byYear[max_year][0];

        const example_new = (
            <div className="example_wrapper" key="example_new">
                <img
                    className="album_cover_big"
                    src={new_track.track.album.images[1].url}
                    alt={new_track.track.name}
                ></img>

                <div>
                    <p>
                        your most recent tracks include
                    </p>

                    <p>
                        <a className="bold" href="item.track.external_urls.spotify">{new_track.track.name}</a>
                    </p>
                    <p>
                        by {' '}
                        {new_track.track.artists
                            .map((artist, key) => (
                                <a className="bold" key={key} href={artist.external_urls.spotify}>
                                    {artist.name}
                                </a>
                            ))
                            .reduce((prev, curr) => [prev, ', ', curr])}
                    </p>
                    <p>
                        released
                        <span className="colored"> {new_track.track.album.release_date}</span>.
                    </p>
                </div>
            </div>
        )

        const range = (
            <div>
                <div className="outer">
                    <h1 key="range">
                        your music spans
                    <span className="colored"> {max_year - min_year} </span>
                    years from
                    <span className="colored"> {min_year} </span>
                    to
                    <span className="colored"> {max_year}</span>
                        {decade}
                        {century}
                    .
                </h1>
                    {example_old}
                    {example_new}

                </div>
                <div className="separator"></div>
            </div>

        )
        return range;
    }
}

export default TimeRange;
