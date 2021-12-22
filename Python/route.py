class Route:
    id = int
    start = []
    end = []

    def __init__(self, id, start, end):
        self.id = id
        self.start = start
        self.end = end