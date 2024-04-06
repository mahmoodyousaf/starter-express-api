const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json()); // Add this line for body parsing middleware

const pool = new Pool({
    host: "161.97.76.136",
    user: "SA_PSQL_Engine",
    password: "Lmmoyjwt1",
    database: "DataHub",
    port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
        console.error('Error connecting to PostgreSQL:', err);
        return;
    }
    console.log('Connected to PostgreSQL database');
});


app.get("/", (req, res) => {
    res.send(`
      <html>
        <head>
        </head>
        <body>
          <p>Database successfully connected</p>
        </body>
      </html>
      `);
});

// Route to get all table names
app.get("/tables", (req, res) => {
    if (req.headers.authorization) {
        const secretKey = req.headers.authorization.replace("Bearer ", "");
        if (secretKey == process.env.API_KEY) {
            pool.query("SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname='public';", (err, result) => {
                if (err) {
                    console.error('Error querying PostgreSQL:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                const data = result.rows;
                res.json({ response: data });
            });
        } else {
            res.json({ response: "Unauthorized access" });
        }
    } else {
        res.json({ response: "Unauthorized access" });
    }
});

// Route to get data from the models_stats table
app.get("/models/stats", (req, res) => {
    if (req.headers.authorization) {
        const secretKey = req.headers.authorization.replace("Bearer ", "");
        if (secretKey == process.env.API_KEY) {
            pool.query("SELECT * FROM models_stats;", (err, result) => {
                if (err) {
                    console.error('Error querying PostgreSQL:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                const data = result.rows;
                res.json({ response: data });

            });
        } else {
            res.json({ response: "Unauthorized access" });
        }
    } else {
        res.json({ response: "Unauthorized access" });
    }
});

// Route to get data from the config table
app.get("/configs/controller", (req, res) => {
    if (req.headers.authorization) {
        const secretKey = req.headers.authorization.replace("Bearer ", "");
        if (secretKey == process.env.API_KEY) {
            pool.query("SELECT * FROM configs_controller;", (err, result) => {
                if (err) {
                    console.error('Error querying PostgreSQL:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                const data = result.rows;
                res.json({ response: data });

            });
        } else {
            res.json({ response: "Unauthorized access" });
        }
    } else {
        res.json({ response: "Unauthorized access" });
    }
});


// Route to get data from the config table
app.get("/configs/strategies", (req, res) => {
    if (req.headers.authorization) {
        const secretKey = req.headers.authorization.replace("Bearer ", "");
        if (secretKey == process.env.API_KEY) {
            pool.query("SELECT * FROM configs_strategies;", (err, result) => {
                if (err) {
                    console.error('Error querying PostgreSQL:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                const data = result.rows;
                res.json({ response: data });

            });
        } else {
            res.json({ response: "Unauthorized access" });
        }
    } else {
        res.json({ response: "Unauthorized access" });
    }
});


// Route to get data from the config table
app.get("/configs/simulator", (req, res) => {
    if (req.headers.authorization) {
        const secretKey = req.headers.authorization.replace("Bearer ", "");
        if (secretKey == process.env.API_KEY) {
            pool.query("SELECT * FROM configs_simulator;", (err, result) => {
                if (err) {
                    console.error('Error querying PostgreSQL:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                const data = result.rows;
                res.json({ response: data });

            });
        } else {
            res.json({ response: "Unauthorized access" });
        }
    } else {
        res.json({ response: "Unauthorized access" });
    }
});

// Route to get data from the config table
app.get("/configs/execution", (req, res) => {
    if (req.headers.authorization) {
        const secretKey = req.headers.authorization.replace("Bearer ", "");
        if (secretKey == process.env.API_KEY) {
            pool.query("SELECT * FROM configs_execution;", (err, result) => {
                if (err) {
                    console.error('Error querying PostgreSQL:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                const data = result.rows;
                res.json({ response: data });

            });
        } else {
            res.json({ response: "Unauthorized access" });
        }
    } else {
        res.json({ response: "Unauthorized access" });
    }
});


// Route to get data from the stats table
app.get("/simulator/stats", (req, res) => {
    if (req.headers.authorization) {
        const secretKey = req.headers.authorization.replace("Bearer ", "");
        if (secretKey == process.env.API_KEY) {
            pool.query("SELECT * FROM simulator_stats;", (err, result) => {
                if (err) {
                    console.error('Error querying PostgreSQL:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                const data = result.rows;
                res.json({ response: data });

            });
        } else {
            res.json({ response: "Unauthorized access" });
        }
    } else {
        res.json({ response: "Unauthorized access" });
    }
});

// Route to get data from the simulator_start_dates table
app.get("/simulator/start_date", (req, res) => {
    if (req.headers.authorization) {
        const secretKey = req.headers.authorization.replace("Bearer ", "");
        if (secretKey == process.env.API_KEY) {
            pool.query("SELECT * FROM simulator_start_dates;", (err, result) => {
                if (err) {
                    console.error('Error querying PostgreSQL:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                const data = result.rows;
                res.json({ response: data });

            });
        } else {
            res.json({ response: "Unauthorized access" });
        }
    } else {
        res.json({ response: "Unauthorized access" });
    }
});


// Route to get data from the simulator_live table
app.get("/simulator/live", (req, res) => {
    if (req.headers.authorization) {
        const secretKey = req.headers.authorization.replace("Bearer ", "");
        if (secretKey == process.env.API_KEY) {
            pool.query("SELECT * FROM simulator_live;", (err, result) => {
                if (err) {
                    console.error('Error querying PostgreSQL:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                const data = result.rows;
                res.json({ response: data });

            });
        } else {
            res.json({ response: "Unauthorized access" });
        }
    } else {
        res.json({ response: "Unauthorized access" });
    }
});


// Route to get data from the ledger table
app.get("/get_ledger/:ledger", (req, res) => {
    if (req.headers.authorization) {
        const ledger = req.params.ledger;
        const secretKey = req.headers.authorization.replace("Bearer ", "");
        if (secretKey == process.env.API_KEY) {
            pool.query(`SELECT * FROM ${ledger}`, (err, result) => {
                if (err) {
                    console.error('Error querying PostgreSQL:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                const data = result.rows;
                res.json({ response: data });

            });
        } else {
            res.json({ response: "Unauthorized access" });
        }
    } else {
        res.json({ response: "Unauthorized access" });
    }
});


// Route to get data from the ledger table
app.get("/signals/:strategy", (req, res) => {
    if (req.headers.authorization) {
        const strategy = req.params.strategy;
        const secretKey = req.headers.authorization.replace("Bearer ", "");
        if (secretKey == process.env.API_KEY) {
            pool.query(`SELECT id, signal, datetime FROM signals_${strategy} order by id desc limit 2`, (err, result) => {
                if (err) {
                    console.error('Error querying PostgreSQL:', err);
                    res.status(500).json({ error: 'Internal Server Error' });
                    return;
                }
                const data = result.rows;
                res.json({ response: data });

            });
        } else {
            res.json({ response: "Unauthorized access" });
        }
    } else {
        res.json({ response: "Unauthorized access" });
    }
});
app.post("/edit/configs_strategies", (req, res) => {
    const updatedConfigurations = req.body; // Assuming the updated data is sent in the request body
    console.log("Data->", updatedConfigurations);

    pool.query(`UPDATE configs_strategies
    SET 
        time_horizon = '${updatedConfigurations.timeHorizon}',
        data_exchange = '${updatedConfigurations.dataExchange}',
        use_ml = '${updatedConfigurations.useML}',
        use_patterns = '${updatedConfigurations.usePattern}',
        use_filters = '${updatedConfigurations.useFilters}',
        is_live = '${updatedConfigurations.isLive}',
        simulator = '${updatedConfigurations.simulator}',
        execution = '${updatedConfigurations.execution}',
        live_tp_sl = '${updatedConfigurations.liveTpSl}',
        live_tp_percent = '${updatedConfigurations.liveTpPercent}',
        live_sl_percent = '${updatedConfigurations.liveSlPercent}',
        backtest_start_date = '${updatedConfigurations.backtestStartDate}',
        backtest_end_date = '${updatedConfigurations.backtestEndDate}',
        backtest_tp_sl = '${updatedConfigurations.backtestTpSl}',
        backtest_tp_percent = '${updatedConfigurations.backtestTpPercent}',
        backtest_sl_percent = '${updatedConfigurations.backtestSlPercent}',
        ml_models_selection_metric = '${updatedConfigurations.mlModelsSelectionMetric}',
        ml_models_selection_value = '${updatedConfigurations.mlModelsSelectionValue}',
        filters_use_rsi = '${updatedConfigurations.filtersUseRsi}',
        filters_use_stoch_rsi = '${updatedConfigurations.filtersUseStochRsi}',
        filters_use_longshort = '${updatedConfigurations.filtersUseLongShort}',
        filters_percent_required = '${updatedConfigurations.filtersPercentRequired}',
        patterns_use_complete_patterns = '${updatedConfigurations.patternsUseCompletePatterns}',
        patterns_use_incomplete_patterns = '${updatedConfigurations.patternsUseIncompletePatterns}',
        patterns_list_complete_patterns = '${updatedConfigurations.patternsListCompletePatterns}',
        patterns_list_incomplete_patterns = '${updatedConfigurations.patternsListIncompletePatterns}',
        patterns_window = '${updatedConfigurations.patternsWindow}',
        patterns_sl_ratio = '${updatedConfigurations.patternsSlRatio}',
        patterns_tp1_ratio = '${updatedConfigurations.patternsTp1Ratio}',
        patterns_tp2_ratio = '${updatedConfigurations.patternsTp2Ratio}',
        patterns_allowed_error = '${updatedConfigurations.patternsAllowedError}',
        patterns_tie_breaker = '${updatedConfigurations.patternsTieBreaker}',
        rsi_window = '${updatedConfigurations.rsiWindow}',
        rsi_over_bought = '${updatedConfigurations.rsiOverBought}',
        rsi_over_sold = '${updatedConfigurations.rsiOverSold}',
        stoch_rsi_window = '${updatedConfigurations.stochRsiWindow}',
        stoch_rsi_over_bought = '${updatedConfigurations.stochRsiOverBought}',
        stoch_rsi_over_sold = '${updatedConfigurations.stochRsiOverSold}',
        longshort_intervals = '${updatedConfigurations.longShortIntervals}',
        longshort_percent_required = '${updatedConfigurations.longShortPercentRequired}', 
        symbol = '${updatedConfigurations.symbol}'
    WHERE
        name = '${updatedConfigurations.name}';`, (err, result) => {
        if (err) {
            console.error('Error querying PostgreSQL:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        const data = result.rows;
        console.log("Updated entry")
        res.json({ message: "Data is successfully updated" });

    });
    // Use updatedConfigurations to update the SQL table
    // Implement your SQL update logic here

    // res.json({ message: "Data updated successfully" });
});
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
