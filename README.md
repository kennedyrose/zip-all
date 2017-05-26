# zip-all

A Mac CLI that zips up all directories within a directory.

## Installation

```bash
$ npm install zip-all --global
```

## Usage

```bash
$ cd some-directory
$ zip-all
```

To only zip some directories, you can set a prefix option that will only zip the directories that start with the supplied characters.

```bash
$ # Zips up all directories that start with "zip-me-"
$ zip-all --prefix zip-me-
```
